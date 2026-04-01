import { ContentData, Language } from './types';

export const CONTENT: Record<Language, ContentData> = {
  [Language.VI]: {
    nav: {
      home: 'Trang chủ',
      features: 'Tính năng',
      guide: 'Hướng dẫn',
      privacy: 'Bảo mật',
      contact: 'Liên hệ',
    },
    hero: {
      title: 'Hẹn Nhé - Nhắc Lịch Việt',
      subtitle: 'Ứng dụng báo thức & quản lý lịch hẹn thông minh dành riêng cho người Việt.',
      imageSubtitle: 'Bạn thường xuyên lỡ các cuộc hẹn quan trọng? Bạn muốn nhắc nhở người thân, bạn bè thực hiện mục tiêu chung? Hay đơn giản bạn cần một công cụ tra cứu lịch âm chuẩn xác để nhắc ngày giỗ, ngày lễ? Hẹn Nhé - Nhắc Lịch Việt chính là người trợ lý đắc lực dành cho bạn.',
      download: 'Tải Ứng Dụng Ngay',
      learnMore: 'Tìm hiểu thêm',
    },
    intro: {
      title: 'CÁC TÍNH NĂNG NỔI BẬT',
      description: [
        'Hẹn Nhé - Nhắc Lịch Việt không chỉ là một chiếc đồng hồ báo thức, đó là phong cách sống kỷ luật và kết nối. Tải ngay để bắt đầu những cuộc hẹn đúng giờ!',
        'Hẹn Nhé - Nhắc Lịch Việt - Ứng dụng báo thức & quản lý lịch hẹn thông minh dành riêng cho người Việt.'
      ],
      features: [
        {
          title: 'BÁO THỨC ĐA NĂNG & THÔNG MINH',
          description: 'Báo thức cá nhân, báo thức nhóm và tính năng "Quản lý" giúp cha mẹ đặt báo thức từ xa cho con cái, sếp giao việc cho nhân viên.',
          iconName: 'AlarmClock'
        },
        {
          title: 'LỊCH ÂM VIỆT NAM CHUẨN XÁC',
          description: 'Tra cứu ngày âm/dương ngay trên màn hình chính. Công cụ đổi ngày âm dương linh hoạt, hỗ trợ tìm ngày giỗ, lễ tết.',
          iconName: 'CalendarDays'
        },
        {
          title: 'TRÒ CHUYỆN TRONG LỊCH HẸN',
          description: 'Mỗi lịch hẹn nhóm tích hợp một phòng chat riêng. Trao đổi nhanh ngay trong bối cảnh công việc.',
          iconName: 'MessageSquare'
        },
        {
          title: 'ĐỒNG BỘ ĐÁM MÂY AN TOÀN',
          description: 'Đăng nhập bằng tài khoản Apple hoặc Google để lưu trữ toàn bộ dữ liệu. Đổi máy hay cài lại app, chỉ cần 1 cú chạm để khôi phục mọi thứ.',
          iconName: 'Cloud'
        },
        {
          title: 'GIAO DIỆN "MIDNIGHT" SANG TRỌNG',
          description: 'Thiết kế hiện đại, hỗ trợ Dark Mode cực đẹp, giúp bảo vệ mắt và mang lại trải nghiệm cao cấp.',
          iconName: 'Moon'
        }
      ],
      note: 'Lưu ý: Để báo thức luôn reo đúng giờ, vui lòng bật "Hồ sơ thông báo" và "Cảnh báo quan trọng" trong cài đặt máy.'
    },
    guide: {
      title: 'HƯỚNG DẪN SỬ DỤNG - CẦM TAY CHỈ VIỆC',
      steps: [
        {
          title: '1. Để báo thức luôn reo đúng giờ',
          content: 'Vào Cài đặt máy -> Hẹn Nhé - Nhắc Lịch Việt -> Thông báo -> Bật "Hồ sơ thông báo" và "Cảnh báo quan trọng". Tránh để chế độ Im lặng hoặc Không làm phiền.'
        },
        {
          title: '2. Đăng nhập Apple hoặc Google để làm gì?',
          content: 'Giúp toàn bộ lịch hẹn được lưu an toàn trên "đám mây". Khi đổi điện thoại hoặc lỡ tay xóa app, chỉ cần đăng nhập lại là mọi thứ quay trở về.'
        },
        {
          title: '3. Cách tạo Báo thức đúng mục đích',
          content: 'Bấm dấu (+) chọn Báo thức mới. Có 3 lựa chọn: "Cho mình" (Cá nhân), "Cho nhóm" (Bạn bè) và "Nhắc người khác" (Giao việc/Quản lý).'
        },
        {
          title: '4. Dùng Lịch Âm & Tìm ngày Giỗ',
          content: 'Xem ngày âm ngay dưới ngày dương. Vào mục "Đổi ngày", xoay vòng tròn để chọn ngày âm, sau đó bấm "Thêm sự kiện" để app tự tính ngày dương hàng năm.'
        },
        {
          title: '5. Gửi & Chấp nhận một Lịch hẹn',
          content: 'Kết bạn trước, sau đó tạo báo thức "Cho nhóm". Bạn bè sẽ nhận lời mời tại mục "Thông báo". Khi họ bấm "Chấp nhận", lịch sẽ tự động hiện trên máy họ.'
        },
        {
          title: '6. Trò chuyện ngay trong Lịch hẹn',
          content: 'Bấm vào lịch hẹn, chọn biểu tượng Chat để trao đổi: "Dậy chưa?", "Đúng 8h có mặt nhé"... Mọi thảo luận đi kèm với nội dung công việc.'
        },
        {
          title: '7. Cài đặt Âm thanh & Nhạc chuông',
          content: 'Có thể đổi nhạc chuông riêng cho TỪNG báo thức khi tạo. Bạn cũng có thể tải nhạc từ điện thoại mình lên để làm chuông báo.'
        },
        {
          title: '8. Sao lưu & Khôi phục dữ liệu',
          content: 'Thỉnh thoảng hãy dùng nút "Sao lưu" trong mục Cài đặt. App sẽ tạo ra một file nhỏ chứa toàn bộ dữ liệu để bạn lưu vào Email hoặc Drive.'
        }
      ],
      tips: 'Mẹo: Người nhận báo thức "Nhắc người khác" không thể tự ý xóa lịch - đảm bảo công việc luôn đúng tiến độ.',
      shareText: 'Chia sẻ bạn bè: Tải ngay Hẹn Nhé - Nhắc Lịch Việt để bắt đầu những cuộc hẹn đúng giờ!',
      team: 'HenNhe_NhacLichViet Team - 2026'
    },
    privacy: {
      title: 'CHÍNH SÁCH BẢO MẬT ỨNG DỤNG "HẸN NHÉ - NHẮC LỊCH VIỆT"',
      lastUpdated: 'Cập nhật lần cuối: 01/04/2026',
      intro: 'Chào mừng bạn đến với "Hẹn Nhé - Nhắc Lịch Việt". Chúng tôi cam kết bảo vệ quyền riêng tư của bạn. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn thông qua các dịch vụ của nền tảng Google Firebase và Google AdMob.',
      sections: [
        {
          title: '1. GIỚI THIỆU',
          content: 'Chúng tôi cam kết bảo vệ quyền riêng tư của bạn. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn thông qua các dịch vụ của nền tảng Google Firebase và Google AdMob.'
        },
        {
          title: '2. THÔNG TIN THU THẬP',
          content: '* Thông tin định danh: Email, Tên hiển thị và Ảnh đại diện từ tài khoản Apple hoặc Google.\n* Dữ liệu ứng dụng: Báo thức, lịch hẹn, nhiệm vụ và nội dung trò chuyện được lưu trữ trên Firebase Firestore.\n* Dữ liệu thiết bị: ID thiết bị cho thông báo đẩy và ID quảng cáo (IDFA) cho AdMob.'
        },
        {
          title: '3. DỊCH VỤ CỦA BÊN THỨ BA',
          content: 'Ứng dụng tích hợp các dịch vụ của Google: Firebase Authentication & Firestore, Firebase Analytics, và Google AdMob.'
        },
        {
          title: '4. MỤC ĐÍCH SỬ DỤNG DỮ LIỆU',
          content: '* Đồng bộ hóa lịch hẹn và nhiệm vụ giữa các thiết bị.\n* Gửi thông báo nhắc nhở báo thức đúng giờ.\n* Hỗ trợ tính năng kết bạn và quản lý báo thức nhóm.\n* Duy trì dịch vụ miễn phí thông qua quảng cáo.'
        },
        {
          title: '5. QUYỀN CỦA NGƯỜI DÙNG & XÓA DỮ LIỆU',
          content: 'Bạn có quyền xóa dữ liệu cục bộ hoặc yêu cầu xóa hoàn toàn tài khoản và dữ liệu trên đám mây thông qua ứng dụng hoặc email hỗ trợ.'
        },
        {
          title: '6. THÔNG TIN LIÊN HỆ',
          content: 'Mọi thắc mắc xin vui lòng liên hệ: HenNhe_NhacLichViet Team (Hoangld988).'
        }
      ]
    },
    contact: {
      title: 'Liên hệ với chúng tôi',
      namePlaceholder: 'Tên của bạn',
      emailPlaceholder: 'Email của bạn',
      messagePlaceholder: 'Nội dung tin nhắn',
      sendButton: 'Gửi Tin Nhắn',
      infoText: 'Chúng tôi luôn sẵn sàng lắng nghe ý kiến đóng góp của bạn để cải thiện ứng dụng tốt hơn.'
    },
    footer: {
      copyright: '© 2026 HenNhe_NhacLichViet Team. All rights reserved.'
    }
  },
  [Language.EN]: {
    nav: {
      home: 'Home',
      features: 'Features',
      guide: 'Guide',
      privacy: 'Privacy',
      contact: 'Contact',
    },
    hero: {
      title: "Let's Meet - Vietnamese Calendar",
      subtitle: 'Smart alarm & appointment management app specifically for Vietnamese people.',
      imageSubtitle: 'Do you often miss important appointments? Want to remind relatives and friends to achieve common goals? Or simply need an accurate lunar calendar tool? Let\'s Meet is your powerful assistant.',
      download: 'Download App Now',
      learnMore: 'Learn More',
    },
    intro: {
      title: 'OUTSTANDING FEATURES',
      description: [
        "Let's Meet - Vietnamese Calendar is not just an alarm clock, it's a disciplined and connected lifestyle. Download now to start on-time appointments!",
        "Let's Meet - Vietnamese Calendar Reminder - Smart alarm & appointment management app for Vietnamese people."
      ],
      features: [
        {
          title: 'VERSATILE & SMART ALARM',
          description: 'Personal alarms, group alarms, and "Management" features for parents to set remote alarms for children or bosses to assign tasks.',
          iconName: 'AlarmClock'
        },
        {
          title: 'ACCURATE LUNAR CALENDAR',
          description: 'Look up lunar/solar dates right on the main screen. Flexible conversion tool for death anniversaries and holidays.',
          iconName: 'CalendarDays'
        },
        {
          title: 'CHAT WITHIN APPOINTMENTS',
          description: 'Each group appointment integrates a private chat room. Quick exchange within the work context.',
          iconName: 'MessageSquare'
        },
        {
          title: 'SECURE CLOUD SYNC',
          description: 'Log in with Apple or Google account to store all data. Change devices or reinstall the app, just 1 tap to restore everything.',
          iconName: 'Cloud'
        },
        {
          title: 'LUXURIOUS "MIDNIGHT" INTERFACE',
          description: 'Modern design, beautiful Dark Mode support, protecting eyes and providing a premium experience.',
          iconName: 'Moon'
        }
      ],
      note: 'Note: To ensure alarms always ring on time, please enable "Notification Profiles" and "Critical Alerts" in device settings.'
    },
    guide: {
      title: 'USER GUIDE - STEP BY STEP',
      steps: [
        {
          title: '1. Ensure Alarms Ring on Time',
          content: 'Go to Device Settings -> Let\'s Meet - Vietnamese Calendar -> Notifications -> Enable "Notification Profiles" and "Critical Alerts". Avoid Silent or Do Not Disturb modes.'
        },
        {
          title: '2. Why Log in with Apple or Google?',
          content: 'Helps all your appointments be stored safely on the "cloud". When you change phones or accidentally delete the app, just log in again.'
        },
        {
          title: '3. Creating Alarms for the Right Purpose',
          content: 'Press (+) to choose New Alarm. 3 options: "For me" (Personal), "For group" (Friends), and "Remind others" (Task/Management).'
        },
        {
          title: '4. Using Lunar Calendar & Finding Anniversaries',
          content: 'View lunar date under solar date. In "Convert date", rotate to select lunar date, then "Add event" for automatic annual solar calculation.'
        },
        {
          title: '5. Sending & Accepting Appointments',
          content: 'Add friends first, then create "For group" alarm. Friends receive invitations in "Notifications". Once accepted, it appears on their phone.'
        },
        {
          title: '6. Chatting within Appointments',
          content: 'Click on the appointment, select the Chat icon to exchange: "Awake yet?", "Be there at 8 AM"... All discussions stay with the task.'
        },
        {
          title: '7. Sound & Ringtone Settings',
          content: 'Change ringtones for EACH alarm. You can also upload music from your phone to use as an alarm sound.'
        },
        {
          title: '8. Data Backup & Restore',
          content: 'Occasionally use the "Backup" button in Settings. The app creates a small file containing all your data to save to Email or Drive.'
        }
      ],
      tips: 'Tip: Recipients of "Remind others" alarms cannot delete them - ensuring tasks stay on schedule.',
      shareText: 'Share with friends: Download Let\'s Meet - Vietnamese Calendar now to start on-time appointments!',
      team: "Let's Meet Team - 2026"
    },
    privacy: {
      title: '"LET\'S MEET - VIETNAMESE CALENDAR" APP PRIVACY POLICY',
      lastUpdated: 'Last updated: April 1, 2026',
      intro: 'Welcome to "Let\'s Meet - Vietnamese Calendar". We are committed to protecting your privacy. This policy explains how we collect, use, and protect your information.',
      sections: [
        {
          title: '1. INTRODUCTION',
          content: 'We are committed to protecting your privacy. This policy explains how we collect, use, and protect your information through Google Firebase and AdMob services.'
        },
        {
          title: '2. INFORMATION COLLECTED',
          content: '* Identity Info: Email, Display Name, and Profile Picture from Apple or Google account.\n* App Data: Alarms, appointments, tasks, and chat content stored on Firebase Firestore.\n* Device Data: Device ID for push notifications and Advertising ID (IDFA) for AdMob.'
        },
        {
          title: '3. THIRD-PARTY SERVICES',
          content: 'The app integrates Google services: Firebase Authentication & Firestore, Firebase Analytics, and Google AdMob.'
        },
        {
          title: '4. PURPOSE OF DATA USE',
          content: '* Syncing appointments and tasks across devices.\n* Sending timely alarm reminders.\n* Supporting friend features and group alarm management.\n* Maintaining free service through personalized ads.'
        },
        {
          title: '5. USER RIGHTS & DATA DELETION',
          content: 'You have the right to delete local data or request full account and cloud data deletion through the app or support email.'
        },
        {
          title: '6. CONTACT INFORMATION',
          content: "Any questions please contact: Let's Meet Team (Hoangld988)."
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Message',
      sendButton: 'Send Message',
      infoText: 'We are always ready to listen to your feedback to improve the application.'
    },
    footer: {
      copyright: "© 2026 Let's Meet Team. All rights reserved."
    }
  }
};
