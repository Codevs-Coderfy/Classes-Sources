 let currentScene = 1;
        let totalScenes = 8;
        let autoplayInterval;
        let isPlaying = true;

        function showScene(sceneNumber) {
            for (let i = 1; i <= totalScenes; i++) {
                const scene = document.getElementById(`scene${i}`);
                scene.classList.remove('active');
            }
            
            const activeScene = document.getElementById(`scene${sceneNumber}`);
            activeScene.classList.add('active');
        }

        function nextScene() {
            currentScene = currentScene < totalScenes ? currentScene + 1 : 1;
            showScene(currentScene);
        }

        function previousScene() {
            currentScene = currentScene > 1 ? currentScene - 1 : totalScenes;
            showScene(currentScene);
        }

        function startAutoplay() {
            autoplayInterval = setInterval(() => {
                nextScene();
            }, 3000);
        }

        function stopAutoplay() {
            clearInterval(autoplayInterval);
        }

        function toggleAutoplay() {
            const playBtn = document.getElementById('playBtn');
            if (isPlaying) {
                stopAutoplay();
                playBtn.textContent = '▶️';
                isPlaying = false;
            } else {
                startAutoplay();
                playBtn.textContent = '⏸️';
                isPlaying = true;
            }
        }

        function restartVideo() {
            currentScene = 1;
            showScene(currentScene);
            if (!isPlaying) {
                toggleAutoplay();
            }
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Initialize autoplay
        startAutoplay();

        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowRight':
                case ' ':
                    e.preventDefault();
                    nextScene();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    previousScene();
                    break;
                case 'r':
                case 'R':
                    restartVideo();
                    break;
                case 'p':
                case 'P':
                    toggleAutoplay();
                    break;
            }
        });

        // Pause video when not in viewport
        const videoContainer = document.querySelector('.video-container');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting && isPlaying) {
                    toggleAutoplay();
                }
            });
        });
        observer.observe(videoContainer);