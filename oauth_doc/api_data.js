define({ "api": [
  {
    "type": "GET",
    "url": "/api/v2/notify/subscribe/:deviceType",
    "title": "首页--查询订阅信息",
    "group": "Web3_App",
    "version": "0.0.1",
    "description": "<p>用于用户取消订阅</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n     \"Authorization\": Bearer 6afdcb81bfe08bb9f6687c298572dbfd2771bf8e\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>设备类型 {ios,android}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "/api/v2/notify/subscribe/android\n/api/v2/notify/subscribe/ios",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n       _id: '5a2e359a3879b72c5e0a63fe',\n       linkID: '55e3229a443c37b90cbd4aec',\n       deviceID: '32323',\n       pushID: '123',\n       deviceType: 'android',\n       accept: { sms: true, system: true, wechat: true },\n       subscribe: true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误样例1:",
          "content": "{ statusCode: 400001, message: '缺少关键参数' }",
          "type": "json"
        },
        {
          "title": "错误样例2:",
          "content": "{ statusCode: 400001, message: '参数deviceType不合法' }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/notification_router.js",
    "groupTitle": "Web3_App",
    "name": "GetApiV2NotifySubscribeDevicetype"
  },
  {
    "type": "POST",
    "url": "/api/v2/login",
    "title": "首页--用户登录",
    "group": "Web3_App",
    "version": "0.0.1",
    "description": "<p>用户账号登录</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n   \"Content-Type\": application/json\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户登录密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceID",
            "description": "<p>设备ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>设备类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientVersion",
            "description": "<p>客户端版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "req:{\n      username: \"root\",\n      password: \"9876\",\n      deviceID: \"huanche\",\n      deviceType: \"oauth\",\n      clientVersion: \"1.0\"\n   }",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "res:{\n      \"token\": \"1ed61b18c5c161766f991bfda5354d18104f4e52\",\n      \"tokenExpires\": \"2018-03-08T00:24:39.000Z\",\n      \"userID\": {\n         \"_id\": \"57b585c274d7eb017679e147\",\n         \"username\": \"root\",\n         \"role\": 0,\n         \"secret\": \"sha256$ac110$1$2c8d42d67dd51154e66a6d3e79c6309a08145aab6e41c5fa2eae62ba4c4992fb\",\n         \"passwd\": \"$2a$05$ZtuN2boj3CAER.OpyC8rDeZgNaVYTdcN3sFVLCp0u/nyFdIImG6re\",\n         \"realName\": \"root\",\n         \"linkID\": \"57b585c274d7eb017679e147\",\n         \"update_at\": \"2016-08-18T09:54:10.000Z\",\n         \"create_at\": \"2016-08-18T09:54:10.000Z\",\n         \"isBlocked\": 0,\n         \"loginAttempts\": 0,\n         \"oauth\": [],\n         \"rights\": [],\n         \"merchants\": [],\n         \"createTime\": \"2017-12-08T08:24:39.510Z\",\n         \"status\": \"active\",\n         \"linkIDS\": [],\n         \"roles\": [\"act-admin\"]\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n     code:403,\n     statusCode: 403004,\n     message: '密码不正确\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/authentication_router.js",
    "groupTitle": "Web3_App",
    "name": "PostApiV2Login"
  },
  {
    "type": "POST",
    "url": "/api/v2/loginFromWechat",
    "title": "首页--微信登录",
    "group": "Web3_App",
    "version": "0.0.1",
    "description": "<p>用户微信登录</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n   \"Content-Type\": application/json\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "password",
            "description": "<p>用户登录密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceID",
            "description": "<p>设备ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>设备类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientVersion",
            "description": "<p>客户端版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "req:{\n       \"access_token\": \"G4TT9jG3Y3S3pK4rBMxuCHFgRdo56SQKpC8WKv_4-rIeJ0UwnOaN9t8DCoIyKgSDAVAIKdV2cveWZ--oOEvsoYGy1jBTicXWQCgq2SHdo-X\",\n       \"openid\": \"oEPLfshf5z7V-jWCXWh0oJNyTxTk\",\n       \"deviceID\": \"1234212342\",\n       \"appID\": \"22232323\",\n       \"deviceType\": \"android\",\n       \"clientVersion\": \"1.1.2\"\n   }",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "res:{\n      token: '17892c69d722f7e54d29e24fba1654f7c5181b7f',\n      tokenExpires: '2015-06-23T00:13:33.000Z',\n      userId: '1’\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n   code:403\n   statusCode: 403001,\n   message: 'access_token expired, hints: [ req_id: ExKT_0057sz16 ]'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/authentication_router.js",
    "groupTitle": "Web3_App",
    "name": "PostApiV2Loginfromwechat"
  },
  {
    "type": "POST",
    "url": "/api/v2/logout",
    "title": "首页--退出登录",
    "group": "Web3_App",
    "version": "0.0.1",
    "description": "<p>退出登录</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n   \"Content-Type\": \"application/json\",\n   \"Authorization\":'Bearer ffc4e21e6a7022aea5b6cfb71cf9f256692d4f15'\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "req:{\n      'Content-Type': 'application/json',\n      'Authorization':'Bearer ffc4e21e6a7022aea5b6cfb71cf9f256692d4f15'\n   }",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "res:{\n        \"code\":200,\n        \"statusCode\": 0,\n        \"message\": \"Logout successful\"\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n     \"status\": 401,\n     \"text\": \"Unauthorized\",\n     \"method\": \"POST\",\n     \"path\": \"/api/v2/logout\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/authentication_router.js",
    "groupTitle": "Web3_App",
    "name": "PostApiV2Logout"
  },
  {
    "type": "POST",
    "url": "/api/v2/notify/subscribe",
    "title": "首页--添加订阅",
    "group": "Web3_App",
    "version": "0.0.1",
    "description": "<p>用于用户添加相应的订阅</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n     \"Authorization\": Bearer 6afdcb81bfe08bb9f6687c298572dbfd2771bf8e\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>设备类型 {ios,android}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceID",
            "description": "<p>安卓设备推送iD</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pushID",
            "description": "<p>苹果设备推送iD</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "accept",
            "description": "<p>订阅频道开关</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例1：",
          "content": "{\n     linkID:'5a2e359a3879b72c5e0a63fe',\n     pushID: '123',\n     deviceID:'32323',\n     deviceType: \"android\",\n     accept: {\n         sms: true,\n         wechat: true,\n         system: true\n     }\n }",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{ statusCode: 0, message: 'Successful create subscribe the notification' }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误样例1:",
          "content": "{ statusCode: 400001, message: '缺少关键参数' }",
          "type": "json"
        },
        {
          "title": "错误样例2:",
          "content": "{ statusCode: 400001, message: '参数deviceType不合法' }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/notification_router.js",
    "groupTitle": "Web3_App",
    "name": "PostApiV2NotifySubscribe"
  },
  {
    "type": "POST",
    "url": "/api/v2/notify/unsubscribe",
    "title": "首页--取消订阅",
    "group": "Web3_App",
    "version": "0.0.1",
    "description": "<p>用于用户取消订阅</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n     \"Authorization\": Bearer 6afdcb81bfe08bb9f6687c298572dbfd2771bf8e\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>设备类型 {ios,android}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceID",
            "description": "<p>安卓设备推送iD</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pushID",
            "description": "<p>苹果设备推送iD</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n       pushID: '123',\n       deviceID:'32323',\n       deviceType: \"ios\"\n   }",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{ statusCode: 0, message: 'Successful unsubscribe the notification' }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误样例1:",
          "content": "{ statusCode: 400001, message: '缺少关键参数' }",
          "type": "json"
        },
        {
          "title": "错误样例2:",
          "content": "{ statusCode: 400001, message: '参数deviceType不合法' }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/notification_router.js",
    "groupTitle": "Web3_App",
    "name": "PostApiV2NotifyUnsubscribe"
  },
  {
    "type": "POST",
    "url": "/api/v2/sms/requestVerifyCode",
    "title": "首页--获取手机验证码",
    "group": "Web3_App",
    "version": "0.0.1",
    "description": "<p>用于用户手机验证码的获取</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n   \"Content-Type\": application/json\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zone",
            "description": "<p>国内手机</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "req:{\n    \"phone\": '13986502540',\n    \"zone\": '+86'\n}",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "res:{\n       \"code\":200,\n       \"token\": '+86:13986502540:1801512712670:3ab8adbd57ccaae2f7fd645d230a815fafad9019',\n       \"VerifyCode\":'872498'\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n  \"code\": 404,\n  \"error\": true,\n  \"message\": \"statusCode: 400001,message: '请求失败'\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/authentication_router.js",
    "groupTitle": "Web3_App",
    "name": "PostApiV2SmsRequestverifycode"
  },
  {
    "type": "POST",
    "url": "/api/v2/sms/verifyPhoneCode",
    "title": "首页--用手机验证码登录",
    "group": "Web3_App",
    "version": "0.0.1",
    "description": "<p>用于用户利用手机验证码登录</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n   \"Content-Type\": application/json\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份认证令牌</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "VerifyCode",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceID",
            "description": "<p>设备ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceType",
            "description": "<p>设备类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientVersion",
            "description": "<p>客户端版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "req:{\n     token: '+86:13986502540:1801512712670:3ab8adbd57ccaae2f7fd645d230a815fafad9019',\n     code: '872498',\n     deviceID: '212121',\n     deviceType: 'android',\n     clientVersion: '1.0.0'\n   }",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "res:{\n       \"code\":200,\n       \"token\": '04ec78cd7f85b6df07f25e5d0ca704bf7925c2d3',\n       \"userID\":'59798c5ffe88daa542229115',\n       \"phone\": '13986502540',\n       \"linkID\": '59798c5ffe88daa542229115',\n       \"passwd\": '$2a$05$ibhS3PbYFIUu94h6dn2vpenNTsx7HdmECLfoOfZnzL7wY0MnWSCKK',\n       \"createTime\": '2017-07-27T06:46:55.646Z',\n       \"roles\": [ 'hui-user' ]\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n  \"code\": 404,\n  \"statusCode\": 401001,\n  \"message\": '请求的token是无效的'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/authentication_router.js",
    "groupTitle": "Web3_App",
    "name": "PostApiV2SmsVerifyphonecode"
  },
  {
    "type": "POST",
    "url": "/api/v2/Users/register",
    "title": "首页--用户注册",
    "group": "Web3_App",
    "version": "0.0.1",
    "description": "<p>用户注册 此接口存储密码需要自行进行hash</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n   \"Content-Type\": application/json\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户登录密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "req:{\n      username: 'test_3',\n      password: '111'\n   }",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "res:{\n       \"linkID\":\"5a2a4981c464c0840d784266\",\n       \"passwd\":\"111\",\n       \"username\":\"test_3\",\n       \"_id\":\"5a2a4981c464c0840d784266\",\n       \"update_at\":\"2017-12-08T08:12:49.239Z\",\n       \"create_at\":\"2017-12-08T08:12:49.239Z\",\n       \"isBlocked\":0,\n       \"loginAttempts\":0,\n       \"oauth\":[],\n       \"rights\":[],\n       \"merchants\":[],\n       \"createTime\":\"2017-12-08T08:12:49.238Z\",\n       \"status\":\"active\",\n       \"linkIDS\":[],\n       \"roles\":[]\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n  code:403,\n  statusCode: 403002,\n  message: '用户已经存在'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user_router.js",
    "groupTitle": "Web3_App",
    "name": "PostApiV2UsersRegister"
  },
  {
    "type": "POST",
    "url": "/api/v2/Users/roles/add",
    "title": "首页--添加角色",
    "group": "Web3_App",
    "version": "0.0.1",
    "description": "<p>用户注册之后添加角色</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n   \"Content-Type\": application/json，\n   \"Authorization\":'Bearer 04ec78cd7f85b6df07f25e5d0ca704bf7925c2d3'\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "roles",
            "description": "<p>角色</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "req:{\n      userId:'59798c5ffe88daa542229115',\n      roles:['user']\n   }",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "\n\nres:{\n    \"message\": \"add roles to user\",\n    \"data\": {\n      \"n\": 1,\n      \"nModified\": 0,\n      \"opTime\": {\n        \"ts\": \"6497153305339232257\",\n        \"t\": 7\n      },\n      \"electionId\": \"7fffffff0000000000000007\",\n      \"ok\": 1\n    },\n    \"error\": false\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n    code:403,\n     message: 'roles not exists!',\n      data: null,\n      error: true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user_router.js",
    "groupTitle": "Web3_App",
    "name": "PostApiV2UsersRolesAdd"
  }
] });
