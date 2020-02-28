$(function () {
    var form = layui.form
    // 点击了注册的链接
    $('#link-reg').on('click', function () {
        $('.login-box').hide() // 隐藏
        $('.reg-box').show() // 展示
    })

    // 点击了登录的链接
    $('#link-login').on('click', function () {
        $('.login-box').show() // 展示
        $('.reg-box').hide() // 隐藏
    })

    // 自定义校验规则
    form.verify({
        // 正则函数验证密码输入必须在6-12位
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        // 密码和验证密码框是否一致
        samePwd: function (value) {
            // 1. 通过形参，获取到确认密码框中的值a
            // 2. 通过 jQuery 获取到密码框中的值
            // [name=password],属性选择器'[]'选择属性mane为password的的标签
            var psw = $('.reg-box name=password').val();
            if (value !== psw) {
                // 如果密码和第二次输入的密码不一致输出错误信息
                return '两次密码不一致'
            }
        }
    })





})







