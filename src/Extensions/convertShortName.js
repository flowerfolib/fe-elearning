export const convertShortName = (e) => {
    switch (e) {
        case 'hoi-nhap-dinh-huong':
            return "orientation_integration";
        case 'cong-nghe':
            return "cn";
        case 'ban-kiem-soat':
            return "ks";
        case 'ban-hien-tai':
            return 'ht';
        case 'ban-btkh':
            return 'ptkh';
        case 'ban-ptth-va-sp':
            return 'ptsp';
        case 'ban-cung-ung':
            return 'ccu';
        case 'ban-tai-chinh-ke-toan':
            return 'kt';
        default:
            return ''
    }
}