document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', event => {
    if (event.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screen capture is disabled.');
    }
});

document.addEventListener('keyup', event => {
    if (event.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screen capture is disabled.');
    }
});
