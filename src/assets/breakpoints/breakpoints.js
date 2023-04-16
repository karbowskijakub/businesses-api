const size = {
    xxxs: "0px",
    xxs: "400px",
    xs: "576px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
    lgx: "1280px",
    xl: "1400px",
};
const device = {
    xxxs: `(min-width: ${size.xxxs})`,
    xxs: `(min-width: ${size.xxs})`,
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    lgx: `(min-width: ${size.lgx})`,
    xl: `(min-width: ${size.xl})`,
};
export default { size, device };
