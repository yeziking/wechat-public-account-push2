/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx40404e44ee8beccf',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '0e243bd5cb6e84e69c9f8e48bdc27fa6',

  // 天行API配置
  TIAN_API: '268a723e949a009c40503553984ebd6d', // 你的天行API密钥
  
  PROVINCE: '北京',
  CITY: '北京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '测试幸福',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onIJR7P0ennneAcBUeQq-skVF7bk',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'k-44NHSuauPA4WisQua-4FH7tUwRzEic_r07p6djbL8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '3-30',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1990', date: '03-04',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '1990', date: '03-30',
        },
      //  {
      //    type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
    //    },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
       // { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-06-16' },
      ],
    },

    {
      // 想要发送的人的名字
      name: '蓉蓉',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onIJR7DC4308d7dNycafHMuYqRiI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'k-44NHSuauPA4WisQua-4FH7tUwRzEic_r07p6djbL8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '3-30',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1990', date: '03-04',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '1990', date: '03-30',
        },
      //  {
      //    type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
    //    },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
       // { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-06-16' },
      ],
    },
    
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'k-44NHSuauPA4WisQua-4FH7tUwRzEic_r07p6djbL8',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onIJR7MYXFuwJkj0Su3FYKWicxC4',
    }
  ],

}

module.exports = USER_CONFIG

