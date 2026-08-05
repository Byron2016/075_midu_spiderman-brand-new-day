import { prefersReducedMotion } from '@/lib/gsap';

export function dragScroll(track: HTMLElement) {
	let isDragging = false;
	let startX = 0;
	let startScrollLeft = 0;

	const onMouseMove = (e: MouseEvent) => {
		if (!isDragging) return;
		e.preventDefault();
		
		const currentX = e.pageX;
		const walk = currentX - startX;
		
		track.scrollLeft = startScrollLeft - walk;
	};

	const stopDrag = () => {
		if (!isDragging) return;
		isDragging = false;
		
		if (!prefersReducedMotion()) {
			track.style.scrollBehavior = 'smooth';
		}
		
		track.style.scrollSnapType = ''; 
		
		setTimeout(() => {
			track.style.scrollBehavior = '';
		}, 300);
		
		window.removeEventListener('mousemove', onMouseMove);
		window.removeEventListener('mouseup', stopDrag);
	};

	const onMouseDown = (e: MouseEvent) => {
		if (e.button !== 0) return;
		
		isDragging = true;
		startX = e.pageX;
		startScrollLeft = track.scrollLeft;
		
		track.style.scrollBehavior = 'auto';
		track.style.scrollSnapType = 'none';
		
		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('mouseup', stopDrag);
	};

	track.addEventListener('mousedown', onMouseDown);

	return () => {
		track.removeEventListener('mousedown', onMouseDown);
		window.removeEventListener('mousemove', onMouseMove);
		window.removeEventListener('mouseup', stopDrag);
	};
}