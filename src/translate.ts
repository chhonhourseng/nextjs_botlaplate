import { ILanguage } from '@/data/types/languege';

type L = ILanguage;

export default class T {

  static readonly personalDetails : L = new ILanguage({
    'en-US': "Personal Details",
    'zh-CN': "个人详细信息",
    'vi-VN': "Thông tin cá nhân",
    'km-KH': "ព័ត៌មានលម្អិតផ្ទាល់ខ្លួន",

  });

  static readonly confirmNewPassword : L = new ILanguage({
    'en-US': "Confirm New Password",
    'zh-CN': "确认新密码",
    'vi-VN': "Xác nhận mật khẩu mới",
    'km-KH': "បញ្ជាក់ពាក្យសម្ងាត់ថ្មី",

  });

  static readonly confirm : L = new ILanguage({
    'en-US': "Confirm",
    'zh-CN': "确认",
    'vi-VN': "Xác nhận",
    'km-KH': "បញ្ជាក់",

  });

  static readonly newPassword : L = new ILanguage({
    'en-US': "New Password",
    'zh-CN': "新密码",
    'vi-VN': "Mật khẩu mới",
    'km-KH': "ពាក្យសម្ងាត់ថ្មី",

  });

  static readonly currentPassword : L = new ILanguage({
    'en-US': "Current Password",
    'zh-CN': "当前密码",
    'vi-VN': "Mật khẩu hiện tại",
    'km-KH': "ពាក្យសម្ងាត់បច្ចុប្បន្ន",

  });

  static readonly otpCodeIsRequired : L = new ILanguage({
    'en-US': "OTP code is required",
    'zh-CN': "需要 OTP 代码",
    'vi-VN': "Mã OTP là bắt buộc",
    'km-KH': "លេខកូដ OTP ត្រូវបានទាមទារ",

  });

  static readonly verify : L = new ILanguage({
    'en-US': "Verify",
    'zh-CN': "验证",
    'vi-VN': "Xác minh",
    'km-KH': "ផ្ទៀងផ្ទាត់",

  });

  static readonly otpVerification : L = new ILanguage({
    'en-US': "OTP Verification",
    'zh-CN': "OTP 验证",
    'vi-VN': "Xác minh OTP",
    'km-KH': "ការផ្ទៀងផ្ទាត់ OTP",

  });

  static readonly logOut: L = new ILanguage({
    'en-US': "Log out",
    'zh-CN': "注销",
    'vi-VN': "Đăng xuất",
    'km-KH': "ចេញ",

  });

  static readonly websiteIsUnderMaintenance : L = new ILanguage({
    'en-US': "Website is under maintenance",
    'zh-CN': "网站正在维护中",
    'vi-VN': "Trang web đang được bảo trì",
    'km-KH': "គេហទំព័រស្ថិតក្រោមការថែទាំ",

  });

  static readonly balance: L = new ILanguage({
    'en-US': "Balance",
    'zh-CN': "平衡",
    'vi-VN': "Cân",
    'km-KH': "តុល្យភាព",
  })

 static readonly transactionRecord : L = new ILanguage({
    'en-US': "Transaction Record",
    'zh-CN': "交易记录",
    'vi-VN': "Hồ sơ giao dịch",
    'km-KH': "កំណត់ត្រាប្រតិបត្តិការ",

  });

  static readonly currentBalance : L = new ILanguage({
    'en-US': "Current Balance",
    'zh-CN': "当前余额",
    'vi-VN': "Số dư hiện tại",
    'km-KH': "សមតុល្យបច្ចុប្បន្ន",

  });

  static readonly somethingWentWrong : L = new ILanguage({
    'en-US': "Something went wrong",
    'zh-CN': "出错了",
    'vi-VN': "Đã xảy ra sự cố",
    'km-KH': "មានអ្វីមួយខុស",

  });

  static readonly resetPassword: L = new ILanguage({
    'en-US': "Reset password",
    'zh-CN': "重置密码",
    'vi-VN': "Đặt lại mật khẩu",
    'km-KH': "កំណត់ពាក្យសម្ងាត់ឡើងវិញ",

  });

  static readonly theConfirmPasswordMustMatchThe: L = new ILanguage({
    'en-US': "The confirm password must match the password",
    'zh-CN': "确认密码必须与密码匹配",
    'vi-VN': "Mật khẩu xác nhận phải khớp với mật khẩu",
    'km-KH': "ពាក្យសម្ងាត់បញ្ជាក់ត្រូវតែត្រូវនឹងពាក្យសម្ងាត់",

  });

  static readonly dontHaveAnAccount: L = new ILanguage({
    'en-US': "Don't have an account?",
    'zh-CN': "没有帐户？",
    'vi-VN': "Bạn chưa có tài khoản?",
    'km-KH': "មិនមានគណនីទេ?",

  });

  static readonly forgotPassword: L = new ILanguage({
    'en-US': "Forgot password?",
    'zh-CN': "忘记密码？",
    'vi-VN': "Quên mật khẩu?",
    'km-KH': "ភ្លេចពាក្យសម្ងាត់?",

  });

  static readonly alreadyHaveAnAccount: L = new ILanguage({
    'en-US': "Already have an account?",
    'zh-CN': "已经有帐户？",
    'vi-VN': "Bạn đã có tài khoản?",
    'km-KH': "មានគណនីរួចហើយ?",

  });

  static readonly createAccount: L = new ILanguage({
    'en-US': "Create Account",
    'zh-CN': "创建账户",
    'vi-VN': "Tạo tài khoản",
    'km-KH': "បង្កើតគណនី",

  });

  static readonly confirmPasswordIsRequired: L = new ILanguage({
    'en-US': "Confirm Password is required",
    'zh-CN': "需要确认密码",
    'vi-VN': "Xác nhận mật khẩu là bắt buộc",
    'km-KH': "បញ្ជាក់ពាក្យសម្ងាត់ត្រូវបានទាមទារ",

  });

  static readonly enterConfirmPassword: L = new ILanguage({
    'en-US': "Enter confirm password",
    'zh-CN': "输入确认密码",
    'vi-VN': "Nhập xác nhận mật khẩu",
    'km-KH': "បញ្ចូលពាក្យសម្ងាត់បញ្ជាក់",

  });

  static readonly confirmPassword: L = new ILanguage({
    'en-US': "Confirm Password",
    'zh-CN': "确认密码",
    'vi-VN': "Xác nhận mật khẩu",
    'km-KH': "បញ្ជាក់ពាក្យសម្ងាត់",

  });

  static readonly password: L = new ILanguage({
    'en-US': "Password",
    'zh-CN': "密码",
    'vi-VN': "Mật khẩu",
    'km-KH': "ពាក្យសម្ងាត់",

  });

  static readonly passwordIsRequired: L = new ILanguage({
    'en-US': "Password is required",
    'zh-CN': "需要密码",
    'vi-VN': "Mật khẩu là bắt buộc",
    'km-KH': "ពាក្យសម្ងាត់ត្រូវបានទាមទារ",

  });

  static readonly enterYourPassword: L = new ILanguage({
    'en-US': "Enter your password",
    'zh-CN': "输入您的密码",
    'vi-VN': "Nhập mật khẩu của bạn",
    'km-KH': "បញ្ចូលពាក្យសម្ងាត់របស់អ្នក។",

  });

  static readonly usernameIsRequired: L = new ILanguage({
    'en-US': "Username is required",
    'zh-CN': "用户名为必填项",
    'vi-VN': "Tên người dùng là bắt buộc",
    'km-KH': "ឈ្មោះអ្នកប្រើត្រូវបានទាមទារ",

  });

  static readonly username: L = new ILanguage({
    'en-US': "Username",
    'zh-CN': "用户名",
    'vi-VN': "Tên đăng nhập",
    'km-KH': "ឈ្មោះអ្នកប្រើប្រាស់",

  });

  static readonly enterYourUsername: L = new ILanguage({
    'en-US': "Enter your username",
    'zh-CN': "输入您的用户名",
    'vi-VN': "Nhập tên người dùng của bạn",
    'km-KH': "បញ្ចូលឈ្មោះអ្នកប្រើរបស់អ្នក។",

  });

  static readonly phoneNumberIsRequired: L = new ILanguage({
    'en-US': "Phone number is required",
    'zh-CN': "电话号码为必填项",
    'vi-VN': "Số điện thoại là bắt buộc",
    'km-KH': "លេខទូរស័ព្ទត្រូវបានទាមទារ",

  });

  static readonly enterYouPhoneNumber: L = new ILanguage({
    'en-US': "Enter you phone number",
    'zh-CN': "输入您的电话号码",
    'vi-VN': "Nhập số điện thoại của bạn",
    'km-KH': "បញ្ចូលលេខទូរស័ព្ទរបស់អ្នក",

  });

  static readonly phoneNumber: L = new ILanguage({
    'en-US': "Phone Number",
    'zh-CN': "电话号码",
    'vi-VN': "Số điện thoại",
    'km-KH': "លេខទូរស័ព្ទ",

  });

  static readonly succeed: L = new ILanguage({
    'en-US': "Succeed",
    'zh-CN': "成功",
    'vi-VN': "Thành công",
    'km-KH': "ជោគជ័យ",

  });

  static readonly status: L = new ILanguage({
    'en-US': "Status",
    'zh-CN': "地位",
    'vi-VN': "Tình trạng",
    'km-KH': "ស្ថានភាព",

  });

  static readonly paymentSystem: L = new ILanguage({
    'en-US': "Payment System",
    'zh-CN': "支付系统",
    'vi-VN': "Hệ thống thanh toán",
    'km-KH': "ប្រព័ន្ធទូទាត់",

  });

  static readonly dateAndTime: L = new ILanguage({
    'en-US': "Date and Time",
    'zh-CN': "日期及时间",
    'vi-VN': "Ngày và giờ",
    'km-KH': "កាលបរិច្ឆេទ និងពេលវេលា",

  });

  static readonly orderId: L = new ILanguage({
    'en-US': "Order ID",
    'zh-CN': "订单 ID",
    'vi-VN': "ID đơn hàng",
    'km-KH': "លេខសម្គាល់បញ្ជាទិញ",

  });

  static readonly submit: L = new ILanguage({
    'en-US': "Submit",
    'zh-CN': "提交",
    'vi-VN': "Trình",
    'km-KH': "ដាក់ស្នើ",

  });

  static readonly amount: L = new ILanguage({
    'en-US': "Amount",
    'zh-CN': "量",
    'vi-VN': "Lượng",
    'km-KH': "ចំនួនទឹកប្រាក់",

  });

  static readonly bankAccountNumber: L = new ILanguage({
    'en-US': "Bank Account Number",
    'zh-CN': "银行账号",
    'vi-VN': "Số tài khoản ngân hàng",
    'km-KH': "លេខគណនីធនាគារ",

  });

  static readonly bankAccountName: L = new ILanguage({
    'en-US': "Bank Account Name",
    'zh-CN': "银行账户名称",
    'vi-VN': "Tên tài khoản ngân hàng",
    'km-KH': "ឈ្មោះគណនីធនាគារ",

  });

  static readonly bank: L = new ILanguage({
    'en-US': "Bank",
    'zh-CN': "岸",
    'vi-VN': "Ngân hàng",
    'km-KH': "ធនាគារ",

  });

  static readonly promotions: L = new ILanguage({
    'en-US': "Promotions",
    'zh-CN': "促销",
    'vi-VN': "Khuyến mãi",
    'km-KH': "ប្រូម៉ូសិន",

  });

  static readonly promotion: L = new ILanguage({
    'en-US': "Promotion",
    'zh-CN': "晋升",
    'vi-VN': "Khuyến mãi",
    'km-KH': "ប្រូម៉ូសិន",

  });

  static readonly logIn: L = new ILanguage({
    'en-US': "Log in",
    'zh-CN': "登录",
    'vi-VN': "Đăng nhập",
    'km-KH': "ចូល",

  });

  static readonly favorite: L = new ILanguage({
    'en-US': "Favorite",
    'zh-CN': "喜欢",
    'vi-VN': "Yêu thích",
    'km-KH': "សំណព្វចិត្ត",

  });

  static readonly deposit: L = new ILanguage({
    'en-US': "Deposit",
    'zh-CN': "Deposit",
    'vi-VN': "Deposit",
    'km-KH': "ដាក់លុយ",

  });

  static readonly wallet: L = new ILanguage({
    'en-US': "Wallet",
    'zh-CN': "Wallet",
    'vi-VN': "Wallet",
    'km-KH': "កាបូបលុយ",

  });

  static readonly withdraw: L = new ILanguage({
    'en-US': "Withdraw",
    'zh-CN': "提取",
    'vi-VN': "Withdraw",
    'km-KH': "ដក",

  });

  static readonly details: L = new ILanguage({
    'en-US': "Details",
    'zh-CN': "细节",
    'vi-VN': "Chi tiết",
    'km-KH': "ព័ត៌មានលម្អិត",

  });

  static readonly register: L = new ILanguage({
    'en-US': "Register",
    'zh-CN': "登记",
    'vi-VN': "đăng ký",
    'km-KH': "ចុះឈ្មោះ",

  });

  static readonly helpCenter: L = new ILanguage({
    'en-US': "HELP CENTER",
    'zh-CN': "帮助中心",
    'vi-VN': "TRUNG TÂM TRỢ GIÚP",
    'km-KH': "មជ្ឈមណ្ឌលជំនួយ",

  });

  static readonly quickLink: L = new ILanguage({
    'en-US': "QUICK LINK",
    'zh-CN': "快速链接",
    'vi-VN': "LIÊN KẾT NHANH",
    'km-KH': "តំណភ្ជាប់រហ័ស",

  });

  static readonly siteMaps: L = new ILanguage({
    'en-US': "SITE MAPS",
    'zh-CN': "站点地图",
    'vi-VN': "BẢN ĐỒ TRANG WEB",
    'km-KH': "ផែនទីគេហទំព័រ",

  });

  static readonly helloHomePage: L = new ILanguage({
    'en-US': 'Hello home page',
    'zh-CN': '你好主页',
    'vi-VN': 'Chào trang chủ',
    'km-KH': 'សួស្តីទំព័រដើម',
  });
}
