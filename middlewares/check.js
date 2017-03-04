module.exports = {
    checkLogin: function checkLogin(req, res, next) {
        if (!req.session.user) {
            req.flash('error', '未登录');
            res.redirect('/signin');
        } else {
            next();
        }
    },
    checkNotLogin: function checkNotLogin(req, res, next) {
        if (req.session.user) {
            req.flash('error', '已登录');
            res.redirect('back'); // 返回之前的页面
        } else {
            next();
        }
    }
}