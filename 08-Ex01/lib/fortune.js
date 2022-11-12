const fortuneCookies = [
    "Đào Thành Nam",
    "Trần Đăng Khôi",
    "Tạ Quang Minh",
    "Võ Văn Việt",
];

exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
};