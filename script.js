document.addEventListener('DOMContentLoaded', function() {

    const checkboxContainer = document.querySelector('.robot-checkbox');
    const customCheckbox = document.querySelector('.custom-checkbox');
    const leftEye = document.querySelector('.left-eye');
    const rightEye = document.querySelector('.right-eye');
    const leftLeg = document.querySelector('.left-leg');
    const rightLeg = document.querySelector('.right-leg');
    const leftFoot = document.querySelector('.left-foot');
    const rightFoot = document.querySelector('.right-foot');
    const legs = document.querySelector('.legs')
    
    // 도망갈 범위 & 거리
    const escapeRadius = 40;
    const escapeDistance = 20;
    let moveX = 0, moveY = 0;

    // 체크박스 도망가기
    checkboxContainer.addEventListener('mousemove', (e) => {
        const rect = customCheckbox.getBoundingClientRect();
        const checkboxCenterX = rect.left + rect.width / 2;
        const checkboxCenterY = rect.top + rect.height / 2;
        legs.style.left = rect.left;
        legs.style.top = rect.top;
    
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const deltaX = checkboxCenterX - mouseX;
        const deltaY = checkboxCenterY - mouseY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
        if (distance < escapeRadius) {
            moveX = (deltaX / distance) * escapeDistance;
            moveY = (deltaY / distance) * escapeDistance;

            // Get current transform values
            let currentTransform = customCheckbox.style.transform;
            let translateX = 0, translateY = 0;
            if (currentTransform.includes('translate')) {
                const match = currentTransform.match(/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/);
                if (match) {
                    translateX = parseFloat(match[1]);
                    translateY = parseFloat(match[2]);
                }
            }

            translateX += moveX;
            translateY += moveY;

            // Get screen width and height
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            // Prevent checkbox from going outside the screen bounds
            if (translateX <= 0 || translateX >= screenWidth - rect.width) {
                moveX = -moveX;  // Reverse direction if it hits the edge
            }
            if (translateY <= 0 || translateY >= screenHeight - rect.height) {
                moveY = -moveY;  // Reverse direction if it hits the edge
            }

            customCheckbox.style.transform = `translate(${translateX}px, ${translateY}px)`;

            // 눈과 다리 등장
            leftEye.style.display = 'block';
            rightEye.style.display = 'block';
            leftLeg.style.display = 'block';
            rightLeg.style.display = 'block';
            leftFoot.style.display = 'block';
            rightFoot.style.display = 'block';
            legs.style.display = 'block'

            // 다리 애니메이션 추가
            leftLeg.classList.add('run');
            rightLeg.classList.add('run');
        }
    });
    
    // 다리 & 발 함께 움직이게 설정
    function startRunning() {
        leftLeg.classList.add('run');
        rightLeg.classList.add('run');
        leftFoot.classList.add('run');
        rightFoot.classList.add('run');
    }

    // 마우스 접근 시 도망가면서 다리 & 발 애니메이션 실행
    checkboxContainer.addEventListener('mousemove', (e) => {
        // 도망가는 코드 (생략)
    
        // 다리 & 발 애니메이션 실행
        startRunning();
    });

    function blinkEyes() {
        console.log("눈 깜빡임 시작"); // 디버깅용 로그
        leftEye.classList.add('blink');
        rightEye.classList.add('blink');
    
        setTimeout(() => {
            console.log("눈 깜빡임 끝"); // 디버깅용 로그
            leftEye.classList.remove('blink');
            rightEye.classList.remove('blink');
        }, 200);
    }
    
    setInterval(() => {
        blinkEyes();
        setTimeout(blinkEyes, 500);
    }, 5000);
});
