
(function() {
	const theme = localStorage.theme || 'light'
	document.documentElement.setAttribute('data-theme', theme)
	//const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
	//document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
	//console.log(`Scrollbar width: ${scrollbarWidth}px`);
})();

function toggleDark() {
	const next = localStorage.theme === 'light' ? 'dark' : 'light'
	localStorage.setItem('theme', next)
	document.documentElement.setAttribute('data-theme', next)
}

function toTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	})
}

document.addEventListener('DOMContentLoaded', () => {
	const btn = document.createElement('button')
	btn.id = 'to-top'
	btn.type = 'button'
	btn.textContent = 'TO TOP'
	btn.setAttribute('aria-label', 'Back to top')
	btn.addEventListener('click', toTop)
	document.body.appendChild(btn)

	const onScroll = () => {
		const halfway = document.documentElement.scrollHeight / 2
		btn.classList.toggle('visible', window.scrollY >= halfway)
	}
	onScroll()
	window.addEventListener('scroll', onScroll, { passive: true })
})
