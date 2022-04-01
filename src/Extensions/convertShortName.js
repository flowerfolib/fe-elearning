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
        default:
            return undefined
    }
}