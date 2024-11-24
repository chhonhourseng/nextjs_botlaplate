export interface IAuth {
    id: number

    username: string

    email: string

    phoneNumber: string

    profile: string

    roles: Array<{ id: number, name: string }>

    accessToken: string

    refreshToken: string

}

export interface IAuthRegister {
    username: string,
    password: string,
    confirmPassword: string,
    phoneNumber: string,
}

export interface IAuthLogin {
    username: string,
    password: string
}

export interface IAuthForgotPassword {
    phoneNumber: string
}

export interface IAuthOTPVerification {
    code: string
}

export interface IAuthResetPassword {
    currentPassword: string,
    newPassword: string,
    confirmNewPassword?: string
}