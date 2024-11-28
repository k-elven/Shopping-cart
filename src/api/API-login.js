import instance from "@/utils/request"

//登录接口请求
export const getPicCode = () => {
    return instance.get(('/captcha/image'))
}

//短信验证码接口
export const getmsgcode = (captchaCode,captchaKey,mobile) => {
    return instance.post('/captcha/sendSmsCaptcha',{
        form:{
            captchaCode,
            captchaKey,
            mobile
        }
    })
}

//登录接口
export const codelogin = (mobile,smsCode) => {
    return instance.post('/passport/login',{
        form:{
            isParty:false,
            mobile,
            partyData:{},
            smsCode
        }
    })
}