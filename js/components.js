// 加载公共组件
function loadComponent(componentName, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`容器 ${containerId} 未找到`);
        return;
    }
    
    // 组件文件路径
    const filePath = `/components/${componentName}.html`;
    
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`组件加载失败: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            container.innerHTML = html;
            console.log(`组件 ${componentName} 加载成功`);
        })
        .catch(error => {
            console.error(`加载组件 ${componentName} 失败:`, error);
            // 失败时显示错误信息（可选）
            container.innerHTML = `<div class="component-error">组件加载失败: ${error.message}</div>`;
        });
}

// 页面加载完成后加载组件
document.addEventListener('DOMContentLoaded', function() {
    // 加载背景组件
    loadComponent('background', 'common-background');
    
    // 加载导航栏组件
    loadComponent('navbar', 'common-navbar');
    
    // 加载页脚组件
    loadComponent('footer', 'common-footer');
    // 可以在这里添加更多组件
});