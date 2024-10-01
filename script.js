let blessings = document.querySelectorAll('.blessing');
let index = 0;
let forwardButton = document.getElementById('forward-button');
let blessingsScreen = document.getElementById('blessings-screen');
let exitButton = document.getElementById('exit-button');

// Khi nhấn nút "Chuyển tiếp"
forwardButton.addEventListener('click', function () {
    // Ẩn giao diện chào tháng 10 với hiệu ứng mượt mà
    document.getElementById('initial-screen').style.transition = 'opacity 0.5s ease';
    document.getElementById('initial-screen').style.opacity = '0';

    // Chờ 0.5 giây để chờ hiệu ứng mờ hoàn tất trước khi chuyển giao diện
    setTimeout(() => {
        document.getElementById('initial-screen').style.display = 'none'; // Ẩn giao diện chào tháng 10

        // Hiển thị giao diện lời chúc
        blessingsScreen.style.display = 'block';
        
        // Hiển thị giao diện lời chúc với hiệu ứng mượt mà
        blessingsScreen.style.opacity = '1'; // Tăng độ sáng lên 1
        showBlessing(); // Bắt đầu hiển thị lời chúc đầu tiên
    }, 500); // Thời gian chờ bằng với thời gian hiệu ứng mờ
});

// Hàm hiển thị lời chúc
function showBlessing() {
    if (index < blessings.length) {
        let currentBlessing = blessings[index];
        currentBlessing.classList.remove('hidden');
        currentBlessing.style.opacity = 1;

        // Tăng chỉ số lời chúc
        index++;

        let displayTime; // Thời gian hiển thị cho từng lời chúc

        // Kiểm tra chỉ số và thiết lập thời gian hiển thị cho các câu chúc cụ thể
        if (currentBlessing.innerText.includes("tháng của những bông hoa sữa")) {
            displayTime = 6000; // 6 giây cho câu đầu tiên
        } else if (currentBlessing.innerText.includes("bắt chuyện anh nhiều hơn xíu")) {
            displayTime = 5000; // 5 giây cho câu thứ bảy
        } else {
            displayTime = 4000; // 4 giây cho các câu còn lại
        }

        // Hiển thị lời chúc hiện tại trong thời gian đã xác định
        setTimeout(function() {
            currentBlessing.style.opacity = 0; // Mờ dần lời chúc hiện tại

            // Hiển thị lời chúc tiếp theo sau khi lời chúc hiện tại đã mờ
            setTimeout(() => {
                showBlessing(); // Hiển thị lời chúc tiếp theo

                // Nếu đã hiển thị hết các câu chúc, hiện nút thoát
                if (index === blessings.length) {
                    exitButton.style.display = 'block'; // Hiện nút thoát
                }
            }, 1500); // Thời gian mờ là 1500ms (1.5 giây)
        }, displayTime); // Sử dụng thời gian hiển thị đã xác định
    }
}

// Di chuyển nút thoát khi nhấn vào
exitButton.addEventListener('click', function() {
    const button = this;
    const x = Math.random() * (window.innerWidth - button.offsetWidth); // Vị trí X ngẫu nhiên
    const y = Math.random() * (window.innerHeight - button.offsetHeight); // Vị trí Y ngẫu nhiên
    button.style.left = x + 'px'; // Cập nhật vị trí X
    button.style.top = y + 'px'; // Cập nhật vị trí Y
});
