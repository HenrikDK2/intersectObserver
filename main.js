const appletree = document.getElementsByClassName('appletree')[0];
const apple = document.getElementById('apple');
const target = document.getElementsByClassName('appletree__img')[0];
const observer = new IntersectionObserver(entries => {
    for (let a = 0, z = entries.length; a < z; a++) {
        if (entries[a].isIntersecting) {
            entries[a].target.classList.add('tree-rustling');

            setTimeout(() => {
                const appleTemplate = apple.content.cloneNode(true);
                appletree.appendChild(appleTemplate);
                entries[a].target.classList.remove('tree-rustling');
            }, 1000);
        } else {
            entries[a].target.classList.remove('tree-rustling');

            for (let i = 0, x = appletree.children.length; i < x; i++) {
                if (appletree.children[i].classList.contains('apple')) {
                    appletree.children[i].remove()
                }
            }
        }
    }
}, { root: null, rootMargin: "0px 0px -200px 0px", threshold: 0 });

observer.observe(target);