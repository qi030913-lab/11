// 创建粒子效果
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        if (Math.random() > 0.5) {
            particle.style.background = 'rgba(0, 255, 136, 0.6)';
        }
        
        container.appendChild(particle);
    }
}

// 实时更新时间显示
function updateDateTime() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    const h = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const dateEl = document.getElementById('date-time');
    if (dateEl) {
        dateEl.textContent = y + ' · ' + m + ' · ' + d + ' ' + h + ':' + min + ':' + s;
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    updateDateTime();
    setInterval(updateDateTime, 1000);
});

// 记录访问时间
const visitTime = new Date().toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai'
});
console.log('🎉 纪念日网站访问时间:', visitTime);