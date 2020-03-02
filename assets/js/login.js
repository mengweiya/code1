$(function () {

    // 注册行为:

    var form = layui.form
    var layer = layui.layer
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


    // 监听注册表单的提交事件
    $('#form-reg').on('submit', function (e) {
        // 阻止表单默认提交
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: 'http://www.liulongbin.top:3007/api/reguser',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 1) {
                    return layer.msg(res.message)
                }
                // layer.msg(res.message);  //注册成功
                layer.msg('注册成功!请登陆~');
            }
        })

    })
    // 监听登录表单的提交事件
    $('#form-login').on('submit', function (e) {
        // 阻止表单默认提交
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: 'http://www.liulongbin.top:3007/api/login',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('登录失败！')
                }
                // 提示用户登录成功
                layer.msg('登录成功！')
                // 将服务器颁发的 token 字符串，持久化存储到 localStorage
                localStorage.setItem('token', res.token)
                // 跳转到后台首页
                location.href = '/index.html'
            }
        })

    })





})







