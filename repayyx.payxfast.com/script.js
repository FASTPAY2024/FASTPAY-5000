function copyAmount() {
    const amount = '₹ 5000';
    navigator.clipboard.writeText(amount).then(() => {
        showPopup('copyModal', 'Amount copied to clipboard!');
    }).catch(err => {
        showPopup('copyModal', 'Failed to copy amount!');
    });
}

function copyUPI() {
    const upi = 'mdas11528-1@oksbi';
    navigator.clipboard.writeText(upi).then(() => {
        showPopup('copyModal', 'UPI copied to clipboard!');
    }).catch(err => {
        showPopup('copyModal', 'Failed to copy UPI!');
    });
}

function showPopup(modalId, message) {
    document.getElementById(modalId).style.display = "block";
    document.getElementById('copyMessage').innerText = message;
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

document.getElementById('submitUtrButton').onclick = function() {
    document.getElementById('utrModal').style.display = "block";
};

document.getElementById('confirmButton').onclick = function() {
    const utrValue = document.getElementById('utrInput').value;
    if (utrValue) {
        alert('UTR submitted: ' + utrValue);
        closeModal('utrModal');
    } else {
        alert('Please enter a UTR number before submitting.');
    }
};

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == document.getElementById('copyModal')) {
        closeModal('copyModal');
    } else if (event.target == document.getElementById('utrModal')) {
        closeModal('utrModal');
    }
};
