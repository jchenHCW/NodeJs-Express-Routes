define({ "api": [
  {
    "type": "GET",
    "url": "/track/intent/add",
    "title": "添加线索",
    "group": "Intent",
    "version": "1.0.1",
    "description": "<p>用于添加用户的线索。</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n \"Content-Type\": application/json\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n         \"intent_type\": \"topic\",\n         \"channel\": \"baidu\",\n         \"origin_url\": \"https://topic.51huanche.com/landing/new1\",\n         \"extra_data\": {\n           \"user_agent\": \"xxxixxxixx\",\n           \"client\": \"ios\",\n           \"compaign\": \"测试活动1\",\n           \"phone\":\"xxxxxx\"\n         },\n         \"desc\": \"这是一个测试的线索\",\n         \"status\": \"created\"\n       }",
          "type": "json"
        },
        {
          "title": "example for intent:",
          "content": "{\n          \"phone\": \"15810308128\",\n          \"intent_type\": \"form\",\n          \"channel\": \"huadao_h5\",\n          \"origin_url\": \"https://topic.51huanche.com/landing/new1\",\n          \"extra_data\": {\n            \"user_agent\": \"xxxixxxixx\",\n            \"client\": \"ios\",\n            \"compaign\": \"测试活动1\",\n            \"used_car_info\": {\n              \"city\": {\n                \"city_che300_id\": 11,\n                \"city_id\": \"5599373cdece166d2ffe7b50\",\n                \"city_name\": \"南京\"\n              },\n              \"model\": {\n                \"model_id\": \"55993c81d843924330426973\",\n                \"model_che300_id\": \"564\",\n                \"model_name\": \"2008款 本田CR-V 2.0L 手动 两驱都市版\"\n              },\n              \"series\": {\n                \"series_id\": \"\",\n                \"series_che300_id\": \"51\",\n                \"series_name\": \"本田CR-V\"\n              },\n              \"brand\": {\n                \"brand_img\": \"https://7-imgpub.51huanche.com/brands/b5.jpg-normal\",\n                \"brand_id\": \"559935e940541feb2e2dea26\",\n                \"brand_che300_id\": \"5\",\n                \"brand_name\": \"本田\"\n              },\n              \"mileage\": \"4\",\n              \"date_reg\": \"2007-4\"\n            },\n            \"new_car_product_id\": \"55993d6bfc0a526a30070cf3\"\n          },\n          \"desc\": \"这是一个测试的线索\",\n          \"status\": \"created\"\n        }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n        \"statusCode\": 1,\n        \"message\": \"ok\",\n        \"data\": {\n          \"update_time\": \"2018-03-09T08:48:42.512Z\",\n          \"create_time\": \"2018-03-09T08:48:42.512Z\",\n          \"intent_type\": \"topic\",\n          \"channel\": \"baidu\",\n          \"origin_url\": \"https://topic.51huanche.com/landing/new1\",\n          \"extra_data\": {\n            \"compaign\": \"测试活动1\",\n            \"client\": \"ios\",\n            \"user_agent\": \"xxxixxxixx\",\n            \"phone\":\"xxxxxx\"\n          },\n          \"desc\": \"这是一个测试的线索\",\n          \"status\": \"created\",\n          \"_id\": \"5aa24a6ad4a7d001479fd914\"\n        }\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/TrackRoute.js",
    "groupTitle": "Intent",
    "name": "GetTrackIntentAdd"
  },
  {
    "type": "GET",
    "url": "/api/v3/my/plan/change/car/details/:planid",
    "title": "查询换车计划详情",
    "group": "car_change_plan",
    "version": "0.0.1",
    "description": "<p>111111111111111111111,</p>",
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
            "field": "planid",
            "description": "<p>555555555555555</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coords",
            "description": "<p>当前位置坐标(coords=116.40732,40.00228)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "appraiser",
            "description": "<p>645454545</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "1./api/v3/my/plan/change/car/details/5a39c7d27edeb6b0357b4f11(App)\n2./api/v3/my/plan/change/car/details/5a39c7d27edeb6b0357b4f11?coords=116.40732,40.00228(Web3)\n3./api/v3/my/plan/change/car/details/5a39c7d27edeb6b0357b4f11?appraiser=true(Manage)",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n  \"data\": {\n    \"orderInfo\": {\n      \"_id\": \"5a41e883286ed3803d1e68d1\",\n      \"comment\": \"\",\n      \"tail_payment\": 6,\n      \"loan\": {\n        \"period\": 24,\n        \"service_fee\": 1000,\n        \"down_payment\": 3,\n        \"balance\": 10,\n        \"contract_no\": \"323231241\",\n        \"product_name\": \"333\"\n      },\n      \"used_car_order\": {\n        \"price\": 9,\n        \"down_payment\": 2,\n        \"final_payment\": 7,\n        \"transfer_time\": \"2017-12-22T06:35:38.680Z\"\n      },\n      \"new_car_order\": {\n        \"price\": 12.98,\n        \"deposit\": 3000,\n        \"pick_up_car_time\": \"2017-12-22T06:35:38.680Z\"\n      },\n      \"contract_no\": \"2017122288888\",\n      \"customer_name\": \"曾哥\",\n      \"customer_phone\": \"18989898982\",\n      \"car_change_plan_id\": \"5a44839c9f99fb4c75057ff4\",\n      \"has_loan_intention\": false,\n      \"attachment\": [],\n      \"deal_type\": \"全委托\",\n      \"status\": \"created\",\n      \"cash_order\": [],\n      \"pos_order_id\": [\n        \"5a4df38d403b7c89685c5555\"\n      ],\n      \"wx_order_id\": [\n        \"xxxx\",\n        \"xxxx11\"\n      ]\n    },\n    \"info\": [\n      {\n        \"_id\": \"5a44839c9f99fb4c75057ff4\",\n        \"update_time\": \"2018-02-09T08:20:23.413Z\",\n        \"create_time\": \"2017-12-28T05:39:40.403Z\",\n        \"city_id\": \"5599373cdece166d2ffe7bb4\",\n        \"owner\": {\n          \"_id\": \"59798c5ffe88daa542229115\",\n          \"phone\": \"13986502540\",\n          \"username\": \"13986502540\",\n          \"realName\": \"jchen\"\n        },\n        \"new_car\": {\n          \"car_products_id\": \"5a38a90ee794ff021d4ea870\",\n          \"info\": {\n            \"car_products_id\": \"5a38a90ee794ff021d4ea870\",\n            \"brand\": {\n              \"brandId\": \"559935e940541feb2e2dea2b\",\n              \"brandChe300\": \"10\",\n              \"brandName\": \"标致\",\n              \"brandImg\": \"brands/b10.jpg\"\n            },\n            \"series\": {\n              \"seriesTitle\": \"东风标致\",\n              \"seriesId\": \"32508\",\n              \"seriesName\": \"标致4008\",\n              \"seriesImg\": \"series/32508_标致4008_金色.jpg\",\n              \"seriesChe300Img\": \"http://seriespic.che300.com/4cce702a04af01ac96254c165df8443c\",\n              \"stop_sale\": false\n            },\n            \"model\": {\n              \"modelId\": \"1126494\",\n              \"modelName\": \"2017款 标致4008 380THP 豪华GT版\"\n            },\n            \"title\": \"2017款 标致4008 380THP 豪华GT版\",\n            \"officialCarPrice\": 27.37,\n            \"officialCarPriceDisplay\": \"27.37万元\",\n            \"currentCarPrice\": 120000,\n            \"currentCarPriceDisplay\": \"12万元\",\n            \"currentTotalPrice\": 120000,\n            \"currentTotalPriceDisplay\": \"12万元\",\n            \"status\": \"active\",\n            \"source\": \"best\",\n            \"selected\": null,\n            \"car_no\": \"0276352019989821652992\"\n          }\n        },\n        \"used_car\": {\n          \"used_car_id\": \"5a4214b99bb3571d73c080f9\",\n          \"info\": {\n            \"used_car_id\": \"5a4214b99bb3571d73c080f9\",\n            \"brand\": {\n              \"brand_id\": \"559935e940541feb2e2dea26\",\n              \"brand_che300_id\": \"5\",\n              \"brand_name\": \"本田\"\n            },\n            \"series\": {\n              \"series_id\": \"\",\n              \"series_che300_id\": \"51\",\n              \"series_name\": \"本田CR-V\"\n            },\n            \"model\": {\n              \"model_id\": \"55993c81d843924330426973\",\n              \"model_che300_id\": \"564\",\n              \"model_name\": \"2008款 本田CR-V 2.0L 手动 两驱都市版\"\n            },\n          }\n        },\n        \"plan_no\": \"0276352019989821652992\",\n        \"carkeeper\": {\n          \"_id\": \"59798c5ffe88daa542229115\",\n          \"phone\": \"13986502540\",\n          \"username\": \"13986502540\",\n          \"realName\": \"jchen\"\n        },\n        \"ck_accept_time\": \"2017-12-28T06:51:29.383Z\",\n        \"customer_info\": \"666\",\n        \"note_info\": \"212121212121\",\n        \"refresh_time\": \"2018-02-09T08:20:23.410Z\",\n        \"status\": \"appointment\",\n        \"difference\": {\n          \"data\": -39700,\n          \"text\": \"-3.97万元\"\n        }\n      }\n    ],\n    \"carOffers\": [\n      {\n        \"price\": \"120000\",\n        \"licence_service_fee\": 0,\n        \"finance_service_fee\": 0,\n        \"allowance\": 0,\n        \"purchase_tax\": 0,\n        \"vehicle_tax\": 0,\n        \"insurance\": 0,\n        \"commercial_insurance\": 0,\n        \"extra_fee\": 0,\n        \"special\": \"\",\n        \"create_time\": \"2017-12-26T09:43:35.520Z\",\n        \"offer_id\": \"5a42157c9bb3571d73c08100\",\n        \"price_change\": -9999880000,\n        \"total_price\": 120000,\n        \"total_price_change\": \"-9999880000.00\",\n        \"expire_time\": \"2118-02-12T09:01:11.244Z\",\n        \"valid_time_duration\": 3155673599999,\n        \"valid_price_time\": \"30天以上\",\n        \"displayPrice\": \"12.00万元\",\n        \"displayTotal_price\": \"12.00万元\",\n        \"merchant\": {\n          \"_id\": \"56987bcd44bd904d1e3293f2\",\n          \"name\": \"东风鸿泰南湖武汉汽车销售服务有限公司（标致）\",\n          \"support\": {\n            \"_id\": \"59798c5ffe88daa542229115\",\n            \"phone\": \"13986502540\",\n            \"username\": \"13986502540\",\n            \"realName\": \"jchen\"\n          }\n        },\n        \"distance\": 1076202.2835553393\n      },\n      {\n        \"create_time\": \"2017-12-27T06:07:55.795Z\",\n        \"special\": \"\",\n        \"extra_fee\": 0,\n        \"commercial_insurance\": 0,\n        \"insurance\": 0,\n        \"vehicle_tax\": 0,\n        \"purchase_tax\": 0,\n        \"allowance\": 0,\n        \"finance_service_fee\": 0,\n        \"licence_service_fee\": 0,\n        \"price\": \"250000\",\n        \"offer_id\": \"5a4338bb311ddf8a59da4390\",\n        \"price_change\": 0,\n        \"total_price\": 250000,\n        \"total_price_change\": 0,\n        \"expire_time\": \"2118-02-12T09:01:11.248Z\",\n        \"valid_time_duration\": 3155673599999,\n        \"valid_price_time\": \"30天以上\",\n        \"displayPrice\": \"25.00万元\",\n        \"displayTotal_price\": \"25.00万元\",\n        \"merchant\": {\n          \"_id\": \"56987bcd44bd904d1e3293f2\",\n          \"name\": \"东风鸿泰南湖武汉汽车销售服务有限公司（标致）\",\n          \"support\": {\n            \"_id\": \"59798c5ffe88daa542229115\",\n            \"phone\": \"13986502540\",\n            \"username\": \"13986502540\",\n            \"realName\": \"jchen\"\n          }\n        },\n        \"distance\": 1076202.2835553393\n      },\n      {\n        \"create_time\": \"2017-12-27T06:07:55.795Z\",\n        \"special\": \"\",\n        \"extra_fee\": 0,\n        \"commercial_insurance\": 0,\n        \"insurance\": 0,\n        \"vehicle_tax\": 0,\n        \"purchase_tax\": 0,\n        \"allowance\": 0,\n        \"finance_service_fee\": 0,\n        \"licence_service_fee\": 0,\n        \"price\": \"250000\",\n        \"offer_id\": \"5a44839e9f99fb4c75057ff5\",\n        \"price_change\": 0,\n        \"total_price\": 250000,\n        \"total_price_change\": 0,\n        \"expire_time\": \"2118-02-12T09:01:11.249Z\",\n        \"valid_time_duration\": 3155673599999,\n        \"valid_price_time\": \"30天以上\",\n        \"displayPrice\": \"25.00万元\",\n        \"displayTotal_price\": \"25.00万元\",\n        \"merchant\": {\n          \"_id\": \"56987bcd44bd904d1e3293f2\",\n          \"name\": \"东风鸿泰南湖武汉汽车销售服务有限公司（标致）\",\n          \"support\": {\n            \"_id\": \"59798c5ffe88daa542229115\",\n            \"phone\": \"13986502540\",\n            \"username\": \"13986502540\",\n            \"realName\": \"jchen\"\n          }\n        },\n        \"distance\": 1076202.2835553393\n      }\n    ],\n    \"usedCarOffers\": [\n      {\n        \"appraiser\": \"55e9af17b621093c16bc8f6e\",\n        \"create_time\": \"2018-01-17T08:14:10.601Z\",\n        \"total_fee\": 159700,\n        \"offer_id\": \"5a55a4ec1c1e10e846bfe679\",\n        \"fee\": 300,\n        \"price\": 160000,\n        \"price_change\": 159700,\n        \"expire_time\": \"2118-02-12T09:01:11.250Z\",\n        \"valid_time_duration\": 3155673600000,\n        \"valid_price_time\": \"30天以上\",\n        \"displayPrice\": \"16.00万元\",\n        \"displayTotal_fee\": \"15.97万元\",\n        \"merchant\": {\n          \"_id\": \"58aa89ffa66da14a3a8b4568\",\n          \"name\": \"换车网测试二手车商户2\",\n          \"support\": {\n            \"_id\": \"55e9af17b621093c16bc8f6e\",\n            \"phone\": \"13681436055\",\n            \"username\": \"13681436055\",\n            \"realName\": \"李大米\"\n          }\n        },\n        \"distance\": 1065842.1830120939\n      },\n      {\n        \"appraiser\": \"580580de74d7eb017679f155\",\n        \"create_time\": \"2018-02-05T08:37:49.156Z\",\n        \"expire_time\": \"2018-02-05T15:59:59.999Z\",\n        \"total_fee\": 80000,\n        \"fee\": 0,\n        \"price\": 80000,\n        \"offer_id\": \"5a586983b6af89397300ce8a\",\n        \"price_change\": 80000,\n        \"valid_time_duration\": -579671252,\n        \"valid_price_time\": \"失效\",\n        \"displayPrice\": \"8.00万元\",\n        \"displayTotal_fee\": \"8.00万元\",\n        \"merchant\": {\n          \"_id\": \"58aa89a3a66da15f3a8b4568\",\n          \"name\": \"换车网测试二手车商户1\",\n          \"support\": {\n            \"_id\": \"580580de74d7eb017679f155\",\n            \"phone\": \"15914197440\",\n            \"realName\": \"秦高梯\",\n            \"username\": \"15914197440\"\n          }\n        },\n        \"distance\": 1064630.5028971073\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/CarChangePlanRoute.js",
    "groupTitle": "car_change_plan",
    "name": "GetApiV3MyPlanChangeCarDetailsPlanid"
  },
  {
    "type": "GET",
    "url": "/api/v3/my/plan/change/car/list/:action",
    "title": "查询换车计划的状态",
    "group": "car_change_plan",
    "version": "0.0.1",
    "description": "<p>用于用户查询进行中的、历史的状态的换车计划</p>",
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
            "field": "action",
            "description": "<p>换车计划状态（状态分为2种：1.current 2.history）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "/api/v3/my/plan/change/car/list/current",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例(全部):",
          "content": "{\n          \"code\": 200,\n          \"error\": false,\n          \"message\": \"操作成功\",\n          \"data\": [\n            {\n              \"_id\": \"5a531bdd6fb9b73c6c9ca30a\",\n              \"update_time\": \"2018-01-16T01:12:06.270Z\",\n              \"create_time\": \"2018-01-08T07:21:01.153Z\",\n              \"city_id\": \"5599373cdece166d2ffe7bb4\",\n              \"owner\": \"59798c5ffe88daa542229115\",\n              \"new_car\": {\n                \"brand_id\": \"559935e940541feb2e2dea71\",\n                \"brand_name\": \"凯迪拉克\",\n                \"series_title\": \"上海通用凯迪拉克\",\n                \"car_products_id\": \"5a38ac89e794ff021d4ece0e\",\n                \"info\": {\n                  \"car_products_id\": \"5a38ac89e794ff021d4ece0e\",\n                  \"brand\": {\n                    \"brandId\": \"559935e940541feb2e2dea71\",\n                    \"brandName\": \"凯迪拉克\",\n                    \"brandChe300\": \"73\"\n                  },\n          ]\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/CarChangePlanRoute.js",
    "groupTitle": "car_change_plan",
    "name": "GetApiV3MyPlanChangeCarListAction"
  },
  {
    "type": "GET",
    "url": "/api/v3/my/plan/current/step",
    "title": "当前换车计划所处阶段",
    "group": "car_change_plan",
    "version": "0.0.1",
    "description": "<p>用于首页查询用户当前换车计划所处的阶段。</p>",
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
      "examples": [
        {
          "title": "请求样例：",
          "content": "/api/v3/my/plan/current/step",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n              \"code\": 200,\n              \"error\": false,\n              \"message\": \"操作成功\",\n              \"data\": 3 // 返回null表示没有找到对应的换车计划，返回3表示等待报价，返回4表示车管加一对一服务\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/CarChangePlanRoute.js",
    "groupTitle": "car_change_plan",
    "name": "GetApiV3MyPlanCurrentStep"
  },
  {
    "type": "POST",
    "url": "/api/v3/carplan/:planId/select/offer/:carType/:offerId",
    "title": "选择新车或旧车报价",
    "group": "car_change_plan",
    "version": "0.0.1",
    "description": "<p>用于选择新车或旧车报价</p>",
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
            "field": "planId",
            "description": "<p>换车计划id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carType",
            "description": "<p>车类型，constant.car_type.newcar | constant.car_type.ercar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offerId",
            "description": "<p>CarOfferModel的_id或UsedCarOfferModel的_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "/api/v3/carplan/5a39c7d27edeb6b0357b4f11/select/offer/newcar/55993c17db9c6c32307321be",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":200,\"error\":false,\"message\":\"操作成功\"}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/ManageRoute.js",
    "groupTitle": "car_change_plan",
    "name": "PostApiV3CarplanPlanidSelectOfferCartypeOfferid"
  },
  {
    "type": "POST",
    "url": "/api/v3/carplan/:planId/unselect/offer/:carType",
    "title": "取消选择新车或旧车报价",
    "group": "car_change_plan",
    "version": "0.0.1",
    "description": "<p>用于取消选择新车或旧车报价</p>",
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
            "field": "planId",
            "description": "<p>换车计划id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carType",
            "description": "<p>车类型，constant.car_type.newcar | constant.car_type.ercar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "/api/v3/carplan/5a39c7d27edeb6b0357b4f11/unselect/offer/newcar",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":200,\"error\":false,\"message\":\"操作成功\"}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/ManageRoute.js",
    "groupTitle": "car_change_plan",
    "name": "PostApiV3CarplanPlanidUnselectOfferCartype"
  },
  {
    "type": "POST",
    "url": "/api/v3/my/plan/change/cancel/:planid",
    "title": "放弃计划操作",
    "group": "car_change_plan",
    "version": "0.0.1",
    "description": "<p>用于选择新车里面填完所有信息点击下一步的时候</p>",
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
            "field": "planid",
            "description": "<p>换车计划id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "/api/v3/my/plan/change/cancel/123123123",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":200,\"error\":false,\"message\":\"操作成功\"}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/CarChangePlanRoute.js",
    "groupTitle": "car_change_plan",
    "name": "PostApiV3MyPlanChangeCancelPlanid"
  },
  {
    "type": "POST",
    "url": "/api/v3/my/plan/change/car",
    "title": "创建换车计划",
    "group": "car_change_plan",
    "version": "0.0.1",
    "description": "<p>用于选择新车里面填完所有信息点击下一步的时候</p>",
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
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n          \"used_car_id\": \"5a2a593dc025d430504a6bf6\",  // 旧车的id\n          \"car_products_id\" : \"55993c17db9c6c32307320da\"   // 车型库id\n      }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":200,\"error\":false,\"message\":\"操作成功\"}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/CarChangePlanRoute.js",
    "groupTitle": "car_change_plan",
    "name": "PostApiV3MyPlanChangeCar"
  },
  {
    "type": "POST",
    "url": "/api/v3/my/plan/change/car/generate/intent/:id",
    "title": "用intent创建换车计划",
    "group": "car_change_plan",
    "version": "1.0.1",
    "description": "<p>用于提交线索以后创建对应的换车计划</p>",
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
      "examples": [
        {
          "title": "请求样例：",
          "content": "/api/v3/my/plan/change/car/generate/intent/5aa24a6ad4a7d001479fd914",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":200,\"error\":false, \"message\":\"操作成功\",\"statusCode\": 1 }",
          "type": "json"
        },
        {
          "title": "返回样例:",
          "content": "{\"code\":400,\"error\":true,\"message\":\"用户最多只能创建三个换车计划\",\"statusCode\":400001}",
          "type": "json"
        },
        {
          "title": "返回样例:",
          "content": "{\"statusCode\":-2,\"message\":\"user already has the car change plan\"}",
          "type": "json"
        },
        {
          "title": "返回样例:",
          "content": "{\"statusCode\":-1,\"message\":\"can not find intent\"}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/CarChangePlanRoute.js",
    "groupTitle": "car_change_plan",
    "name": "PostApiV3MyPlanChangeCarGenerateIntentId"
  },
  {
    "type": "POST",
    "url": "/api/v3/my/plan/change/refresh/:planid",
    "title": "刷新计划操作",
    "group": "car_change_plan",
    "version": "0.0.1",
    "description": "<p>用于选择新车里面填完所有信息点击下一步的时候</p>",
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
            "field": "planid",
            "description": "<p>换车计划id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "/api/v3/my/plan/change/refresh/1213123123",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":200,\"error\":false,\"message\":\"操作成功\"}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/CarChangePlanRoute.js",
    "groupTitle": "car_change_plan",
    "name": "PostApiV3MyPlanChangeRefreshPlanid"
  },
  {
    "type": "GET",
    "url": "/api/v3/new/car/offer/:id",
    "title": "新车报价详情",
    "group": "new_car",
    "version": "0.0.1",
    "description": "<p>用于换车计划里面 查询某个商户的旧车的报价</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>报价的offer_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "/api/v3/new/car/offer/5a30f894f91a28ef0b4e5611",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n     \"Authorization\": Bearer 6afdcb81bfe08bb9f6687c298572dbfd2771bf8e\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n            \"code\": 200,\n            \"error\": false,\n            \"message\": \"操作成功\",\n            \"data\": {\n                \"car\": {\n                    \"id\": \"55993c17db9c6c3230732205\",\n                    \"name\": \"2004款 经典爱丽舍三厢 1.6L SX 16V 自动\"\n                },\n                \"offers\": [\n                    {\n                        \"price\" : \"11.28\",\n                        \"licence_service_fee\" : \"500\",\n                        \"finance_service_fee\" : \"2000\",\n                        \"allowance\" : \"4000\",\n                        \"purchase_tax\" : \"12560\",\n                        \"vehicle_tax\" : \"400\",\n                        \"insurance\" : \"900\",\n                        \"commercial_insurance\" : \"5000\",\n                        \"extra_fee\" : \"12800\",\n                        \"special\" : \"3000\",\n                        \"create_time\" : ISODate(\"2017-12-18T09:45:23.349Z\"),\n                        \"transit_fee\": \"2000\",\n                        \"expire_time\": \"2018-04-01\"\n                    }\n                ],\n                \"comments\": [\n                    {\n                        \"create_time\" : ISODate(\"2017-12-19T01:23:14.071Z\"),\n                        \"is_read\" : false,\n                        \"content\" : \"3000\"\n                    },\n                    {\n                        \"content\" : \"3000\",\n                        \"is_read\" : false,\n                        \"create_time\" : ISODate(\"2017-12-19T01:30:04.248Z\")\n                    }\n                ],\n                \"description\": \"新车报价测试2\",\n                \"offer_type\": \"origin\",\n                \"status\": \"active\",\n                \"planNo\": '0276354883296719011840',\n                \"planStatus\": 'confirm'\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/NewCarRoute.js",
    "groupTitle": "new_car",
    "name": "GetApiV3NewCarOfferId"
  },
  {
    "type": "GET",
    "url": "/api/v3/new/car/offer/template/:carId/:mcid",
    "title": "获取新车报价模板",
    "group": "new_car",
    "version": "0.0.1",
    "description": "<p>按商户id和新车id查找报价模板</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carId",
            "description": "<p>新车id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mcid",
            "description": "<p>商户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "/api/v3/new/car/offer/template/5a38a90ee794ff021d4ea870/56987bcd44bd904d1e3293f2",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n     \"Authorization\": Bearer 6afdcb81bfe08bb9f6687c298572dbfd2771bf8e\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n     \"code\": 200,\n            \"error\": false,\n            \"message\": \"操作成功\",\n            \"data\": {\n                \"_id\": \"5a4338bb311ddf8a59da4390\",\n                \"update_time\": \"2017-12-27T06:07:55.803Z\",\n                \"create_time\": \"2017-12-27T06:07:55.803Z\",\n                \"description\": \"\",\n                \"detail\": {\n                    \"offers\": [{\n                        \"create_time\" : ISODate(\"2017-12-27T06:07:55.795Z\"),\n                        \"special\" : \"\",\n                        \"extra_fee\" : 0,\n                        \"commercial_insurance\" : 0,\n                        \"insurance\" : 0,\n                        \"vehicle_tax\" : 0,\n                        \"purchase_tax\" : 0,\n                        \"allowance\" : 0,\n                        \"finance_service_fee\" : 0,\n                        \"licence_service_fee\" : 0,\n                        \"price\" : \"250000\",\n                        \"transit_fee\": \"2000\",\n                        \"expire_time\": \"2018-04-01\"\n                    }]\n                },\n                \"appraiser\" : ObjectId(\"5a0bfbbb094492eb7d841798\"),\n                \"merchant\" : ObjectId(\"56987bcd44bd904d1e3293f2\"),\n                \"car_products_id\" : ObjectId(\"5a38a90ee794ff021d4ea870\"),\n                \"status\" : \"active\",\n                \"offer_type\" : \"origin\"\n            }\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/NewCarRoute.js",
    "groupTitle": "new_car",
    "name": "GetApiV3NewCarOfferTemplateCaridMcid"
  },
  {
    "type": "POST",
    "url": "/api/v3/new/car/offer/comment/:id",
    "title": "我的新车报价发评论",
    "group": "new_car",
    "version": "0.0.1",
    "description": "<p>用于二手车项目新增 一个旧车的报价</p>",
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
            "field": "id",
            "description": "<p>新车报价id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n       \"content\": \"3000\"\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n     \"code\":200,\n     \"error\":false,\n     \"message\":\"操作成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/NewCarRoute.js",
    "groupTitle": "new_car",
    "name": "PostApiV3NewCarOfferCommentId"
  },
  {
    "type": "GET",
    "url": "/api/v3/my/plan/change/car/order/id/by/:planId",
    "title": "获取订单Id",
    "group": "resource",
    "version": "0.0.1",
    "description": "<p>通过换车计划id获取订单id</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json,\n     \"Authorization\": Bearer 6afdcb81bfe08bb9f6687c298572dbfd2771bf8e\n}",
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
            "field": "planId",
            "description": "<p>换车计划id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "/api/v3/my/plan/change/car/order/id/by/5a44839c9f99fb4c75057ff4",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":200,\"error\":false,\"message\":\"操作成功\",\"data\":\"5a41e883286ed3803d1e68d1\"}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/CarChangePlanRoute.js",
    "groupTitle": "resource",
    "name": "GetApiV3MyPlanChangeCarOrderIdByPlanid"
  },
  {
    "type": "GET",
    "url": "/city/brands/list/:cityId",
    "title": "根据城市获取可用品牌(新车品牌列表)",
    "group": "resource",
    "version": "0.0.1",
    "description": "<p>用于获取某个城市下的可用品牌</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n}",
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
            "field": "cityId",
            "description": "<p>城市id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "/city/brands/list/5599373cdece166d2ffe7b06",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": " {\n   \"code\": 200,\n   \"error\": false,\n   \"message\": \"获取城市可用品牌Id成功.\",\n   \"data\": [\n\t {\n\t   \"_id\": \"559935e940541feb2e2dea22\",\n\t   \"character\": \"A\",\n\t   \"brandName\": \"奥迪\",\n\t   \"brand_id\": \"1\",\n\t   \"img\": \"https://7-imgpub.51huanche.com/brands/b1.jpg-normal\"\n\t },\n\t {\n\t   \"_id\": \"559935e940541feb2e2dea24\",\n\t   \"character\": \"A\",\n\t   \"brandName\": \"阿尔法·罗密欧\",\n\t   \"brand_id\": \"3\",\n\t   \"img\": \"https://7-imgpub.51huanche.com/brands/b3.jpg-normal\"\n\t },\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/BrandRoute.js",
    "groupTitle": "resource",
    "name": "GetCityBrandsListCityid"
  },
  {
    "type": "GET",
    "url": "/resource/brand/hot",
    "title": "获取热门品牌",
    "group": "resource",
    "version": "0.0.1",
    "description": "<p>用于查询品牌车系一套之一（选择新车界面换车第二步上面展示的几个新车品牌）</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n \"statusCode\": 1,\n \"message\": \"ok\",\n \"data\": [\n   {\n     \"_id\": \"559935e940541feb2e2dea27\",\n     \"character\": \"B\",\n     \"brandName\": \"别克\",\n     \"extendData\": {\n       \"che300Id\": \"6\"\n     },\n     \"logo\": \"https://7-imgpub.51huanche.com/brandslogo/20160630/1467257329eIqci.png-normal\",\n     \"brand_id\": \"6\",\n     \"brand_name\": \"别克\",\n     \"createTime\": \"2017-12-15T01:07:52.664Z\",\n     \"updateTime\": \"2018-01-30T06:09:17.189Z\",\n     \"che300_version\": \"3.4.438\",\n     \"img\": \"https://7-imgpub.51huanche.com/brands/b6.jpg-normal\"\n   }]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ResourceRoute.js",
    "groupTitle": "resource",
    "name": "GetResourceBrandHot"
  },
  {
    "type": "GET",
    "url": "/resource/brands",
    "title": "获取品牌列表(旧车品牌列表)",
    "group": "resource",
    "version": "0.0.1",
    "description": "<p>用于查询品牌车系一套之一</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n  \"statusCode\": 1,\n  \"message\": \"ok\",\n  \"data\": [\n    {\n      \"_id\": \"559935e940541feb2e2dea22\",\n      \"character\": \"A\",\n      \"brandName\": \"奥迪\",\n      \"brand_id\": \"1\",\n      \"img\": \"https://7-imgpub.51huanche.com/brands/b1.jpg-normal\"\n    },\n    {\n      \"_id\": \"559935e940541feb2e2dea23\",\n      \"character\": \"A\",\n      \"brandName\": \"阿斯顿·马丁\",\n      \"brand_id\": \"2\",\n      \"img\": \"https://7-imgpub.51huanche.com/brands/b2.jpg-normal\"\n    }]\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ResourceRoute.js",
    "groupTitle": "resource",
    "name": "GetResourceBrands"
  },
  {
    "type": "GET",
    "url": "/resource/brands/:brandId?models=yes&auto=yes&onsale=yes",
    "title": "获取车系列表（新旧车共用）",
    "group": "resource",
    "version": "1.0.1",
    "description": "<p>用于依据brand的id查询里面的车系(旧车无query参数,新车带query参数)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "models",
            "defaultValue": "no",
            "description": "<p>需要获取所有的models</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "auto",
            "defaultValue": "no",
            "description": "<p>自动计算models统计以及价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "onsale",
            "defaultValue": "no",
            "description": "<p>只查询在售的车系true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brandId",
            "description": "<p>品牌ID</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n  \"statusCode\": 1,\n  \"message\": \"ok\",\n  \"data\": [\n    {\n      \"img\": \"https://7-imgpub.51huanche.com/series/5_奥迪A3_银灰色.jpg-normal\",\n      \"id\": 5,\n      \"name\": \"奥迪A3\",\n      \"title\": \"一汽奥迪\",\n      \"series_pic\": \"http://seriespic.che300.com/60c821b0392deac4334266471e20aeac\"\n    },\n    {\n      \"img\": \"https://7-imgpub.51huanche.com/series/6_奥迪A4_奥迪A4旅行车 .jpg-normal\",\n      \"id\": 6,\n      \"name\": \"奥迪A4\",\n      \"title\": \"一汽奥迪\",\n      \"series_pic\": \"http://seriespic.che300.com/f4e2a26393d37a4e8e99c57a9f5ce8d2\"\n    },",
          "type": "json"
        },
        {
          "title": "返回样例:",
          "content": "{\n      \"statusCode\": 1,\n      \"message\": \"ok\",\n      \"data\": [\n        {\n          \"id\": 5,\n          \"img\": \"https://7-imgpub.51huanche.com/series/5_奥迪A3_银灰色.jpg-normal\",\n          \"name\": \"奥迪A3\",\n          \"title\": \"一汽奥迪\",\n          \"models\": [\n            {\n              \"discharge_standard\": \"国5\",\n              \"max_reg_year\": 2017,\n              \"min_reg_year\": 2015,\n              \"model_price\": 22.79,\n              \"title\": \"2015\",\n              \"name\": \"2015款 奥迪A3 Sportback 35 TFSI 百万纪念智领型\",\n              \"id\": 25126,\n              \"model_id\": \"25126\",\n              \"gear_type\": \"自动\",\n              \"liter\": \"1.4T\",\n              \"model_name\": \"2015款 奥迪A3 Sportback 35 TFSI 百万纪念智领型\",\n              \"model_year\": 2015,\n              \"seat_number\": \"5\",\n              \"update_time\": \"2017-12-19 09:35:11\"\n            }\n          ]\n        }\n      ]\n    }",
          "type": "json"
        },
        {
          "title": "返回样例:",
          "content": "{\n  \"statusCode\": 1,\n  \"message\": \"ok\",\n  \"data\": [\n    {\n      \"img\": \"https://7-imgpub.51huanche.com/series/5_奥迪A3_银灰色.jpg-normal\",\n      \"id\": 5,\n      \"name\": \"奥迪A3\",\n      \"title\": \"一汽奥迪\",\n      \"series_pic\": \"http://seriespic.che300.com/60c821b0392deac4334266471e20aeac\",\n      \"price_range\": \"18.49~29.67万\",\n      \"models_counts\": 57\n    },\n    {\n      \"img\": \"https://7-imgpub.51huanche.com/series/6_奥迪A4_奥迪A4旅行车 .jpg-normal\",\n      \"id\": 6,\n      \"name\": \"奥迪A4\",\n      \"title\": \"一汽奥迪\",\n      \"series_pic\": \"http://seriespic.che300.com/f4e2a26393d37a4e8e99c57a9f5ce8d2\",\n      \"price_range\": \"27.49~76万\",\n      \"models_counts\": 74\n    }]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ResourceRoute.js",
    "groupTitle": "resource",
    "name": "GetResourceBrandsBrandidModelsYesAutoYesOnsaleYes"
  },
  {
    "type": "GET",
    "url": "/resource/brands/:brandId/:seriesId?img=yes&&onsale=yes",
    "title": "获取车型列表（新旧车共用）",
    "group": "resource",
    "version": "0.0.1",
    "description": "<p>用于查询品牌车系(旧车无query参数,新车带query参数)</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n}",
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
            "field": "brandId",
            "description": "<p>品牌ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "seriesId",
            "description": "<p>车系ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "onsale",
            "defaultValue": "no",
            "description": "<p>只查询在售的车系yes</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "img",
            "defaultValue": "no",
            "description": "<p>查询带图片yes</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n     \"code\": 200,\n     \"error\": false,\n     \"message\": \"查询成功\",\n     \"data\": [\n       {\n         \"image\": \"http://image.51huanche.com/carproducts/20151201/1448949822.jpeg\",\n         \"car_products_id\": \"55993c17db9c6c323073215c\",\n         \"maker_type\": \"合资\",\n         \"discharge_standard\": \"欧4\",\n         \"max_reg_year\": 2008,\n         \"min_reg_year\": 2003,\n         \"model_price\": 42.96,\n         \"title\": \"2004\",\n         \"name\": \"2004款 奥迪A6 2.4L 豪华舒适\",\n         \"id\": 19608,\n         \"model_id\": \"19608\",\n         \"gear_type\": \"自动\",\n         \"liter\": \"2.4L\",\n         \"model_name\": \"2004款 奥迪A6 2.4L 豪华舒适\",\n         \"model_year\": 2004,\n         \"seat_number\": \"5\",\n         \"update_time\": \"2018-01-23 22:20:29\",\n         \"stop_sale\": true\n       },\n     ]\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ResourceRoute.js",
    "groupTitle": "resource",
    "name": "GetResourceBrandsBrandidSeriesidImgYesOnsaleYes"
  },
  {
    "type": "GET",
    "url": "/resource/cities",
    "title": "城市查询",
    "group": "resource",
    "version": "0.0.1",
    "description": "<p>用于查询</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "[\n{\n  \"_id\": \"5599373cdece166d2ffe7b06\",\n  \"name\": \"北京\",\n  \"che300Id\": 1,\n  \"provId\": 1,\n  \"provName\": \"北京\",\n  \"pinyin\": \"Beijing\",\n  \"zip\": \"010\"\n},\n{\n  \"_id\": \"5599373cdece166d2ffe7b07\",\n  \"name\": \"天津\",\n  \"che300Id\": 2,\n  \"provId\": 2,\n  \"provName\": \"天津\",\n  \"pinyin\": \"Tianjin\",\n  \"zip\": \"022\"\n},\n]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ResourceRoute.js",
    "groupTitle": "resource",
    "name": "GetResourceCities"
  },
  {
    "type": "GET",
    "url": "/resource/cities/online",
    "title": "在线城市查询",
    "group": "resource",
    "version": "1.0.1",
    "description": "<p>用于查询</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n  \"statusCode\": 1,\n  \"message\": \"ok\",\n  \"data\": [\n    {\n      \"_id\": \"5599373cdece166d2ffe7b08\",\n      \"name\": \"上海\",\n      \"che300Id\": 3,\n      \"provId\": 3,\n      \"provName\": \"上海\",\n      \"pinyin\": \"Shanghai\",\n      \"zip\": \"021\",\n      \"loc\": {\n        \"lat\": 31.23037,\n        \"lng\": 121.4737\n      }\n    },\n    {\n      \"_id\": \"5599373cdece166d2ffe7b06\",\n      \"name\": \"北京\",\n      \"che300Id\": 1,\n      \"provId\": 1,\n      \"provName\": \"北京\",\n      \"pinyin\": \"Beijing\",\n      \"zip\": \"010\",\n      \"loc\": {\n        \"lat\": 39.90469,\n        \"lng\": 116.40717\n      }\n    },\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ResourceRoute.js",
    "groupTitle": "resource",
    "name": "GetResourceCitiesOnline"
  },
  {
    "type": "GET",
    "url": "/resource/config/:dtype",
    "title": "获取app配置",
    "group": "resource",
    "version": "1.0.1",
    "description": "<p>用于app设备静态资源配置获取</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dtype",
            "description": "<p>设备类型  ios  android</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n  \"statusCode\": 1,\n  \"message\": \"ok\",\n  \"data\": {\n    \"home_logo\": [\n      \"https://7-imgpub.51huanche.com/v3/index/1.png-normal\",\n      \"https://7-imgpub.51huanche.com/v3/index/2.png-normal\",\n      \"https://7-imgpub.51huanche.com/v3/index/3.png-normal\"\n    ],\n    \"terms_of_use\": {\n      \"customer_promise\": \"http://t-v3.51huanche.com/page/customerpromise\",\n      \"agreement\": \"http://t-v3.51huanche.com/page/agreement\",\n      \"vinnumber\": \"http://t-v3.51huanche.com/page/vinnumber\"\n    },\n    \"logos\": [\n      \"http://7-imgpub.51huanche.com/coupon/service1.png-normal\",\n      \"http://7-imgpub.51huanche.com/coupon/service2.png-normal\",\n      \"http://7-imgpub.51huanche.com/coupon/service3.png-normal\"\n    ],\n    \"original_price\": 99,\n    \"current_price\": 0.01,\n  }\n}",
          "type": "json"
        },
        {
          "title": "ios response:",
          "content": "{\n   \"logos\": [\n     \"http://7-imgpub.51huanche.com/coupon/service1.png-original\",\n     \"http://7-imgpub.51huanche.com/coupon/service2.png-original\",\n     \"http://7-imgpub.51huanche.com/coupon/service3.png-original\"\n   ],\n   \"original_price\": 799,\n   \"current_price\": 0.01,\n   \"pay_finance_desc\": {\n     \"title\": \"使用差价分期付服务\",\n     \"desc\": \"换车金融，差价分期，零首付，零利率。\"\n   },\n   \"qa\": [\n     {\n       \"question\": \"换车网是什么？\",\n       \"answer\": \"换车网是一个为客户提供一站式旧车换新车服务的互联网平台帮客户省钱省时间是我们的服务宗旨。\",\n       \"show\": true\n     },\n     {\n       \"question\": \"置换新车有哪些优惠？\",\n       \"answer\": \"除能享受本地最佳购车价外，另凡是通过换车网达成卖旧车买新车服务，换车网将在新车最终成交价基础上再给予一定现金补贴。\",\n       \"show\": true\n     },\n     {\n       \"question\": \"换车收取佣金吗？\",\n       \"answer\": \"换车网秉承“二手车卖高价、新车拿低价”的服务原则，换车所有环节均不收取中间佣金，如需提供线下一对一管家服务，仅线上收取99元跑腿费。\",\n       \"show\": true\n     },\n     {\n       \"question\": \"置换新车，可以贷款吗？\",\n       \"answer\": \"通过换车网平台换车可享受差价分期服务，利息低、月供轻松。本服务由换车网旗下“换车金融”提供。\",\n       \"show\": true\n     },\n     {\n       \"question\": \"换车网报价靠谱吗？\",\n       \"answer\": \"换车网与全国上万家新车经销商及二手车商保持良好的合作关系，我们给客户提供本地最佳比价方案。真实有效！\",\n       \"show\": true\n     },\n     {\n       \"question\": \"我想换车，需要准备什么？\",\n       \"answer\": \"准备好：1.车主身份证 2.车辆登记证 3.车辆行驶证 4.购车发票。\",\n       \"show\": true\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ResourceRoute.js",
    "groupTitle": "resource",
    "name": "GetResourceConfigDtype"
  },
  {
    "type": "POST",
    "url": "/api/v3/carplan/customer/accept/order/:planId",
    "title": "客户确认订单",
    "group": "resource",
    "version": "0.0.1",
    "description": "<p>客户确认订单</p>",
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
            "field": "planId",
            "description": "<p>换车计划id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    /api/v3/carplan/customer/accept/order/5a449ff735fec3c73eabb00c\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n    \"code\":200,\n    \"error\":false,\n    \"message\":\"操作成功!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/ManageRoute.js",
    "groupTitle": "resource",
    "name": "PostApiV3CarplanCustomerAcceptOrderPlanid"
  },
  {
    "type": "POST",
    "url": "/api/v3/carplan/customer/refuse/order/:planId",
    "title": "客户拒绝订单",
    "group": "resource",
    "version": "0.0.1",
    "description": "<p>客户拒绝订单</p>",
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
            "field": "planId",
            "description": "<p>换车计划id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    /api/v3/carplan/customer/refuse/order/5a449ff735fec3c73eabb00c\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n    \"code\":200,\n    \"error\":false,\n    \"message\":\"操作成功!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/ManageRoute.js",
    "groupTitle": "resource",
    "name": "PostApiV3CarplanCustomerRefuseOrderPlanid"
  },
  {
    "type": "POST",
    "url": "/api/v3/order/app/carkeeper/appointment/wxpayinfo",
    "title": "预约车管家，获取微信支付时需要的参数",
    "group": "resource",
    "version": "1.0.1",
    "description": "<p>用于用户在APP端预约车管家，获取调用微信支付时需要的参数</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json,\n     \"Authorization\": Bearer 6afdcb81bfe08bb9f6687c298572dbfd2771bf8e\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n            \"device_id\": \"xxxxxxxx\",\n            \"device_type\": \"xxxxxxxx\",\n            \"car_change_plan_id\": \"5a41e982286ed3803d1e68d3\",\n            \"money\": 1, //支付金额以分为单位\n            \"installments\": true //是否使用差价分期付服务\n        }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n     \"code\": 200,\n            \"error\": false,\n            \"message\": 'pre pay finished',\n            \"data\": {\n                \"payarge\": {\n                    \"appid\": \"wx8888888888888888\",\n                    \"partnerid\": \"1900000109\",\n                    \"prepayid\": \"WX1217752501201407033233368018\",\n                    \"package\": \"Sign=WXPay\",\n                    \"nonceStr\": \"5K8264ILTKCH16CQ2502SI8ZNMTM67VS\",\n                    \"timeStamp\": \"1412000000\",\n                    \"sign\": \"C380BEC2BFD727A4B6845133519F3AD6\"\n                }\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/OrderRoute.js",
    "groupTitle": "resource",
    "name": "PostApiV3OrderAppCarkeeperAppointmentWxpayinfo"
  },
  {
    "type": "POST",
    "url": "/img/form/nobody",
    "title": "上传图片",
    "group": "resource",
    "version": "1.0.1",
    "description": "<p>用于匿名的图片上传</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     Content-Type:multipart/form-data;\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "------WebKitFormBoundary3Bw51wkQddVKZtpr\n      Content-Disposition: form-data; name=\"file\"; filename=\"20180110172609685363939480321.jpg-908x681.jpg\"\n      Content-Type: image/jpeg\n\n\n      ------WebKitFormBoundary3Bw51wkQddVKZtpr\n      Content-Disposition: form-data; name=\"bucket\"\n\n      image\n      ------WebKitFormBoundary3Bw51wkQddVKZtpr\n      Content-Disposition: form-data; name=\"prefix\"\n\n      web3\n      ------WebKitFormBoundary3Bw51wkQddVKZtpr\n      Content-Disposition: form-data; name=\"thumbnail\"\n\n      200x\n      ------WebKitFormBoundary3Bw51wkQddVKZtpr--",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "    {\n                \"bucket\": \"image\",\n                \"filename\": \"web3/a5028581f67211e78f8e0ff7047bd72a\",\n                \"filesize\": \"206860\",\n                \"imageInfo\": \"{\\\"colorModel\\\":\\\"ycbcr\\\",\\\"format\\\":\\\"jpeg\\\",\\\"height\\\":605,\\\"size\\\":206860,\\\"width\\\":908}\",\n                \"key\": \"web3/a5028581f67211e78f8e0ff7047bd72a\",\n                \"url\": \"https://7-image.51huanche.com/web3/a5028581f67211e78f8e0ff7047bd72a?e=1515639394&token=vBgY4FtrytAhXESocWtDg8OuiNb1LKyKa81IHjqN:PO3BpSy6fPrxkW94xH_ggRsoub4=\",\n                \"thumbnail\": \"https://7-image.51huanche.com/web3/a5028581f67211e78f8e0ff7047bd72a?imageMogr2/thumbnail/200x&e=1515639394&token=vBgY4FtrytAhXESocWtDg8OuiNb1LKyKa81IHjqN:_IhN09I_9acPIrY2s81nmNL8lkM=\",\n                \"state\": \"SUCCESS\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ImageRoute.js",
    "groupTitle": "resource",
    "name": "PostImgFormNobody"
  },
  {
    "type": "POST",
    "url": "/img/generator/base64",
    "title": "订单二维码的接口",
    "group": "resource",
    "version": "1.0.1",
    "description": "<p>用于生产订单的二维码</p>",
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
      "examples": [
        {
          "title": "请求样例:",
          "content": "{\n    \"url\":\"https://s-show.51huanche.com/linkshare?actid=5a139c83bad3544c384a9682&channelid=2&firstlevel=group&secondlevel=55fbeb4744bd9090708b4567&sender=584badbd086962110c446c8e&smcid=5a010ea8cd4ea82115a8291f\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n    \"statusCode\": 1,\n    \"message\": \"ok\",\n    \"data\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAAFFCAAAAABeH6CBAAAFo0lEQVR42u3aW27cOhRFwcx/0r4TsJW1SdkXiItfRrpbEosBjs7jz4d1v/4goEiRokWRIkWKFkWKFClaFClSpGhRpEjR+lzxz9/XZ7/48gKffeWz3z5f/svrffmzuqObnVOkSJEixUnx+Yk+u/Hzczxv/fkq1X06vS83U79MkSJFihQPFYPEYRD9cpu7yXNUf77o9c0pUqRIkeI3K0451HM0LDW9GNUPYzRFihQpUvz/FfeEMBhPx1Brk8/GFClSpEjxJxRvjPfkL3Dsyd/eJvvhKi1FihQp/irFKUz+U3/98IQJRYoUKf4Wxb3Etze4wsjblMpNKd80tVcgKFKkSJHiRX1xSq5C3jdJhC+HS9XsMdyXIkWKFCnuMfpmLOL5AuHx69HsMw+10ljLoRQpUqRIcVesH0wJXAXcY+/0bnD4W4oUKVKkeKg4VQurbL1ROL0Qyw+7cIdpIEWKFClS3BWnMt00KF0PqV6+5ni11hkqkhQpUqRI8XA2orZ+pihX4+xhClkTvf3RKFKkSJHioWJtXO27+Yhrz0H3u+2NtdMMkCJFihQpxihcM8WpiHdd3Kz9qSnV/J7ZCIoUKVL8fYqHk2jToHT9bY2p9dB346vZCIoUKVKkOEfr2jvaA3rddTCuUxxXEBQpUqRI8TYDnDK2KXTuW6q523V++D3T8RQpUqT4qxQPZ+FCXAwfhM7XNH4XBrSn1JUiRYoUKb6jWJ2ev1eTsH3DN68KU4HyKkZTpEiR4q9XrGlW/TQ3gZbe0TTdV/FDyKZIkSJFijeK+5T2c/4V2lDVuLbEQjpbc9DTGE2RIkWKFP9eW5tmvffkKhzDdMphH8H4qr5IkSJFihRfGYuo2qe51kXhsY6r79VHihQpUqT4Tn3xsEw32YXjqj2w0Hab6qQUKVKkSPG67/L8WFPQ22PqjhBMKnn9n0SRIkWKFA+7V9NjBbvD4bxpjm4vLT4nf/ezERQpUqRI8WzE4DAA73uoRzi9TUyRmSJFihQpHvZdakpVZQ8/nRK4/fVh2htFihQpUrxW3NtBNbmqJcN6jxBn9wm9+/oiRYoUKVKcQ9iUTe3dplr7e3Z6fgV4Tl3zaAhFihQpUjyrL+65YI2LUzJ5E6jrbwMvRYoUKVLcFQ+zqRrl6tanl4bJ+DooU6RIkSLFdxSnGL13kWpb67mZVQfsDtPArXtFkSJFihTn5G/i2I2nmmMYpKgvCG/WFylSpEiRYqQM2dnzVbaJg7PZuvrMh1kmRYoUKVJ8uzI2ZUn7cF79az/0vWS4vZhQpEiRIsUYow9LbXuKNlUQn8/snZLmfgwUKVKkSHGK0aGBVNO2qZI3TcWF/VftwyBPkSJFihSnGD21pmolr04w1Ipknf/eL5XbaRQpUqRIcY7RIVZOmeI0ZF1D9iHbtA+KFClSpHijGMLzXr8LhcJabqxrKm7WYilFihQpUnxxrvs6mO2Bvw5rTC2sifz16XiKFClS/M2KNxGtaof4vl9qMq6bLkIUKVKkSPFMcdr14dxbmFu4HsSrD75dhSJFihQpLt2rKdELjzDF9yn5q4F1ylVzCZIiRYoUKS71xb3D805iVk/vcP4iDJ9vR0ORIkWKFOcMcGo5HXav6rzE4VHXZ55eQihSpEiR4ouKU8o3HcjhCMT05lBzxm0wnCJFihQpXmSANRDujxU864Tenh+Gv97MoylSpEjxNyveRL56FtNIxeH49pQLniaYFClSpEhxno2oI2/hy1P3an9BOAzee7eOIkWKFCl+s+LUkHoefLiZVgj3eLHWSZEiRYoUfyxGV4QybBADehjCmBLHykaRIkWKFG8Ub7Ze/61q762um2G67SsUKVKkSPG92YjKts8t1OJhyNP2Flttp1GkSJEixUnRGhdFihQpWhQpUqRoUaRIkaJFkSJFihZFihStj4//ABFpknwBX4M0AAAAAElFTkSuQmCC\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ImageRoute.js",
    "groupTitle": "resource",
    "name": "PostImgGeneratorBase64"
  },
  {
    "type": "POST",
    "url": "/resource/che300/car/appraise",
    "title": "获取二手车报价",
    "group": "resource",
    "version": "1.0.1",
    "description": "<p>用于查询</p>",
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "请求样例：",
          "content": "{\n       \"brand_id\": 5,\n       \"series_id\": 51,\n       \"model_id\": 564,\n       \"date_reg\": \"2010-03\",\n       \"mileage\": 5,\n       \"city_id\": \"319\"\n     }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n  \"message\": \"appraise a car\",\n  \"statusCode\": \"1\",\n  \"data\": {\n    \"eval_price\": 7.76,\n    \"low_price\": 7.25,\n    \"good_price\": 7.76,\n    \"high_price\": 8.28,\n    \"dealer_buy_price\": 7.2,\n    \"individual_price\": 7.76,\n    \"dealer_price\": 8.09,\n    \"url\": \"https://www.che300.com/pinggu/v18c319m564r2010-03g5?from=huanche&_s=ac07616b6c9f5182\",\n    \"price\": \"18.98\",\n    \"discharge_standard\": \"国3\",\n    \"title\": \"本田CR-V  2008款 本田CR-V 2.0L 手动 两驱都市版  仙桃\",\n    \"car_logo_url\": \"http://assets.che300.com/theme/images/brand/large/b5.jpg\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ResourceRoute.js",
    "groupTitle": "resource",
    "name": "PostResourceChe300CarAppraise"
  },
  {
    "type": "GET",
    "url": "/api/v3/old/car",
    "title": "已有车辆查询",
    "group": "used_car",
    "version": "0.0.1",
    "description": "<p>用于查询旧车</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>是否有错误</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>返回消息</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>车的列表</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n     \"Authorization\": Bearer 6afdcb81bfe08bb9f6687c298572dbfd2771bf8e\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "请求样例:",
        "content": "请求的URL: base + /api/v3/old/car?imgparam=imageView2/1/w/200/h/200/thumbnail/200x&vinimgparam=imageView2/2/w/500/thumbnail/500x\nqueryString  imgparam  是图片的反显格式\nqueryString  vinimgparam  是车架号图片的反显格式",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "   {\n        \"code\": 200,\n        \"error\": false,\n        \"message\": \"操作成功\",\n        \"data\": [{\n            \"imgs\": [{\n                \"key\": \"web3/87f58501e21311e78f9b7dd493a0c5b3\",\n                \"text\": \"左前45度\",\n                \"img7\": \"https://7-image.51huanche.com/web3/87f58501e21311e78f9b7dd493a0c5b3?imageView2/1/w/200/h/200/thumbnail/200x&e=1516768455&token=vBgY4FtrytAhXESocWtDg8OuiNb1LKyKa81IHjqN:QZG3Mqj3Kb4j2QfzwvaHWmAO_RI=\"\n            }],\n            \"description\": \"无泡水,无火烧\",\n            \"maintenance\": \"\",\n            \"rescue_times\": \"\",\n            \"transfer_times\": \"\",\n            \"engine_conditions\": \"\",\n            \"interior_conditions\": \"\",\n            \"exterior_conditions\": \"\",\n            \"color\": \"改\",]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/UsedCarRoute.js",
    "groupTitle": "used_car",
    "name": "GetApiV3OldCar"
  },
  {
    "type": "GET",
    "url": "/api/v3/old/car/:id",
    "title": "查询一辆旧车详情",
    "group": "used_car",
    "version": "0.0.1",
    "description": "<p>用于Manage查询旧车的详情</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>旧车的_id</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n     \"Authorization\": Bearer 6afdcb81bfe08bb9f6687c298572dbfd2771bf8e\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "请求样例:",
        "content": "URL: https://t-api.51huanche.com/api/v3/old/car/5a62ac4a79b1c57133b17a3a?imgparam=imageView2/1/w/200/h/200/thumbnail/200x&vinimgparam=imageView2/2/w/500/thumbnail/500x\nqueryString  imgparam  是图片的反显格式\nqueryString  vinimgparam  是车架号图片的反显格式",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": " {\n\t\"code\": 200,\n\t\"error\": false,\n\t\"message\": \"操作成功\",\n\t\"data\": {\n\t\t\"imgs\": [{\n\t\t\t\"key\": \"web3/87f58501e21311e78f9b7dd493a0c5b3\",\n\t\t\t\"text\": \"左前45度\",\n\t\t\t\"img7\": \"https://7-image.51huanche.com/web3/87f58501e21311e78f9b7dd493a0c5b3?imageView2/1/w/200/h/200/thumbnail/200x&e=1516768932&token=vBgY4FtrytAhXESocWtDg8OuiNb1LKyKa81IHjqN:VQp3Gof4RJ2fUeFdUGw2VHGEVPk=\"\n\t\t}],\n\t\t\"description\": \"无泡水,无火烧\",\n\t\t\"maintenance\": \"\",\n\t\t\"rescue_times\": \"\",\n\t\t\"transfer_times\": \"\",\n\t\t\"engine_conditions\": \"\",\n\t\t\"interior_conditions\": \"\",\n\t\t\"exterior_conditions\": \"\",\n\t\t\"color\": \"改\",\n\t\t\"date_reg\": \"2014-04\",\n\t\t\"mileage\": \"5\",\n\t\t\"vin\": {\n\t\t\t\"vin_img_text\": \"测试的\",\n\t\t\t\"vin_img_key\": \"web3/87f58501e21311e78f9b7dd493a0c5b3\",\n\t\t\t\"vin\": \"LFV2A21KXE4176550\",\n\t\t\t\"vin_img_src\": \"https://7-image.51huanche.com/web3/87f58501e21311e78f9b7dd493a0c5b3?imageView2/2/w/500/thumbnail/500x&e=1516768932&token=vBgY4FtrytAhXESocWtDg8OuiNb1LKyKa81IHjqN:adMZ_ealm-nofXflDR7L314xGkQ=\"\n\t\t},\n\t\t\"brand\": {\n\t\t    \"brand_img\":\"https://7-imgpub.51huanche.com/brands/b5.jpg-normal\",\n\t\t\t\"brand_name\": \"本田\",\n\t\t\t\"brand_che300_id\": \"5\",\n\t\t\t\"brand_id\": \"559935e940541feb2e2dea26\"\n\t\t},\n\t\t\"series\": {\n\t\t\t\"series_name\": \"本田CR-V\",\n\t\t\t\"series_che300_id\": \"51\",\n\t\t\t\"series_id\": \"\"\n\t\t},\n\t\t\"model\": {\n\t\t\t\"model_name\": \"2008款 本田CR-V 2.0L 手动 两驱都市版\",\n\t\t\t\"model_che300_id\": \"564\",\n\t\t\t\"model_id\": \"55993c81d843924330426973\"\n\t\t},\n\t\t\"city\": {\n\t\t\t\"city_name\": \"南京\",\n\t\t\t\"city_id\": \"5599373cdece166d2ffe7b50\",\n\t\t\t\"city_che300_id\": 11\n\t\t},\n\t\t\"_id\": \"5a5d7a33b3a564800df1a077\",\n\t\t\"car_no\": \"NANJING6358881833349808128\",\n\t\t\"status\": \"active\",\n\t\t\"car_keeper_memo\": \"车管家测试用111\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/UsedCarRoute.js",
    "groupTitle": "used_car",
    "name": "GetApiV3OldCarId"
  },
  {
    "type": "GET",
    "url": "/api/v3/old/car/offer/:id",
    "title": "查询旧车报价详情",
    "group": "used_car",
    "version": "0.0.1",
    "description": "<p>用于换车计划里面 查询某条旧车报价的详情</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>报价的offer_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": "/api/v3/old/car/offer/5a3099d7a9db26ac32d640fc",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "请求头样例:",
          "content": "{\n     \"Content-Type\": application/json\n     \"Authorization\": Bearer 6afdcb81bfe08bb9f6687c298572dbfd2771bf8e\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "    {\n    \"code\": 200,\n    \"error\": false,\n    \"message\": \"操作成功\",\n    \"data\": {\n        \"used_car_id\": \"5a3099d7a9db26ac32d640fc\",\n        \"appraiser_name\": \"许昌\",\n        \"appraiser_phone\": \"15011421722\",\n        \"appraiser_id\": \"57341cc6b4394ef52c9dd1f3\",\n        \"offer_id\": \"5a3227f0791e1b7c38f369b1\",\n        \"car_no\": \"20171213000001\",\n        \"car_info\": {\n            \"imgs\": [\n                {\n                    \"key\": \"www.x1.com\",\n                    \"text\": \"45度角 外观完好\"\n                },\n                {\n                    \"key\": \"www.x1.com\",\n                    \"text\": \"后45度\"\n                },\n                {\n                    \"key\": \"www.x1.com\",\n                    \"text\": \"侧身照\"\n                },\n                {\n                    \"key\": \"www.x1.com\",\n                    \"text\": \"内饰照\"\n                },\n                {\n                    \"key\": \"www.x1.com\",\n                    \"text\": \"发动机舱照\"\n                },\n                {\n                    \"key\": \"www.x1.com\",\n                    \"text\": \"仪表盘近照\"\n                },\n                {\n                    \"key\": \"www.x1.com\",\n                    \"text\": \"行驶证照片\"\n                }\n            ],\n            \"description\": \"无事故-无泡水-无火烧\",\n            \"maintenance\": \"1\",\n            \"rescue_times\": \"1\",\n            \"transfer_times\": \"1\",\n            \"engine_conditions\": \"优\",\n            \"interior_conditions\": \"优\",\n            \"exterior_conditions\": \"优\",\n            \"color\": \"黄色改\",\n            \"date_reg\": \"2015-03\",\n            \"mileage\": 2.5,\n            \"city\": {\n                \"city_name\": \"武汉\",\n                \"city_id\": \"5599373cdece166d2ffe7bb4\"\n            },\n            \"series\": {\n                \"series_id\": \"1346\",\n                \"series_name\": \"亚星客车\"\n            },\n            \"model\": {\n                \"model_name\": \"api自动测试\",\n                \"model_id\": \"6229\"\n            },\n            \"brand\": {\n                \"brand_name\": \"扬州亚星客车\",\n                \"brand_id\": \"12\"\n            }\n        },\n        \"offers\": [\n            {\n                \"create_time\": \"2017-12-13T07:00:19.318Z\",\n                \"total_fee\": \"91100\",\n                \"fee\": \"100\",\n                \"price\": \"91000\",\n                \"price_desc\": \"9.1万\",\n                \"total_fee_desc\": \"9.11万\"\n            }\n        ],\n        \"comments\": [\n            {\n                \"content\": \"我评论\",\n                \"create_time\": \"2017-12-14T08:54:10.628Z\"\n            },\n            {\n                \"create_time\": \"2017-12-21T06:32:25.395Z\",\n                \"content\": \"我评论\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/UsedCarRoute.js",
    "groupTitle": "used_car",
    "name": "GetApiV3OldCarOfferId"
  },
  {
    "type": "POST",
    "url": "/api/v3/old/car",
    "title": "保存我的旧车信息",
    "group": "used_car",
    "version": "0.0.1",
    "description": "<p>用于预估旧车里面填完旧车点击下一步的时候</p>",
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
      "examples": [
        {
          "title": "保存请求样例:",
          "content": "\n {\n \"loc\" : [\n         114.28754,\n         30.66644\n     ],\n\"city\": {\n         \"city_che300_id\": 11,\n         \"city_id\": \"5599373cdece166d2ffe7b50\",\n         \"city_name\": \"南京\"\n     },\n\"model\": {\n         \"model_id\": \"55993c81d843924330426973\",\n         \"model_che300_id\": \"564\",\n         \"model_name\": \"2008款 本田CR-V 2.0L 手动 两驱都市版\"\n     },\n\"series\": {\n         \"series_id\": \"\",\n         \"series_che300_id\": \"51\",\n         \"series_name\": \"本田CR-V\"\n     },\n\"brand\": {\n         \"brand_img\":\"https://7-imgpub.51huanche.com/brands/b5.jpg-normal\",\n         \"brand_id\": \"559935e940541feb2e2dea26\",\n         \"brand_che300_id\": \"5\",\n         \"brand_name\": \"本田\"\n     },\n\"vin\":{\n         \"vin\":\"LFV2A21KXE4176550\",\n         \"vin_img_key\":\"web3/87f58501e21311e78f9b7dd493a0c5b3\",\n         \"vin_img_text\":\"测试的\"\n     },\n\"mileage\": \"5\",\n\"date_reg\": \"2014-04\",\n\"color\": \"\",\n\"exterior_conditions\": \"\",\n\"interior_conditions\": \"\",\n\"engine_conditions\": \"\",\n\"transfer_times\": \"\",\n\"rescue_times\": \"\",\n\"maintenance\": \"\",\n\"description\": \"无泡水,无火烧\",\n\"imgs\": [\n{\n  \"text\": \"左前45度\",\n  \"key\": \"web3/87f58501e21311e78f9b7dd493a0c5b3\"\n}\n]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\"code\":200,\"error\":false,\"message\":\"操作成功\",\"data\":{\"brand\":{\"brand_id\":\"559935e940541feb2e2dea26\",\"brand_che300_id\":\"5\",\"brand_name\":\"本田\"},\"series\":{\"series_id\":\"\",\"series_che300_id\":\"51\",\"series_name\":\"本田CR-V\"},\"model\":{\"model_id\":\"55993c81d843924330426973\",\"model_che300_id\":\"564\",\"model_name\":\"2008款 本田CR-V 两驱都市版2.0L手动档\"},\"city\":{\"city_che300_id\":11,\"city_id\":\"5599373cdece166d2ffe7b50\",\"city_name\":\"南京\"},\"mileage\":\"4\",\"date_reg\":\"2014-04\",\"color\":\"黄3\",\"exterior_conditions\":\"\",\"interior_conditions\":\"\",\"engine_conditions\":\"\",\"transfer_times\":\"\",\"rescue_times\":\"\",\"maintenance\":\"\",\"description\":\"无泡水,无火烧\",\"imgs\":[{\"text\":\"左前45度\",\"key\":\"web3/87f58501e21311e78f9b7dd493a0c5b3\"}],\"_id\":\"5a41e910286ed3803d1e68d2\",\"car_no\":\"6351304288966279168\",\"status\":\"active\",\"car_keeper_memo\":\"按时大改改\"}}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\"code\":400,\"error\": true,\"message\": \"参数不全\",\"statusCode\": 400001}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/UsedCarRoute.js",
    "groupTitle": "used_car",
    "name": "PostApiV3OldCar"
  },
  {
    "type": "POST",
    "url": "/api/v3/old/car/:id",
    "title": "更新旧车信息",
    "group": "used_car",
    "version": "1.0.1",
    "description": "<p>用于更新旧车信息</p>",
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
            "field": "id",
            "description": "<p>旧车的id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "保存请求样例:",
          "content": "\n{\n\"loc\" : [\n        114.28754,\n        30.66644\n    ],\n \"city\": {\n            \"city_che300_id\": 11,\n            \"city_id\": \"5599373cdece166d2ffe7b50\",\n            \"city_name\": \"南京\"\n        },\n \"model\": {\n            \"model_id\": \"55993c81d843924330426973\",\n            \"model_che300_id\": \"564\",\n            \"model_name\": \"2008款 本田CR-V 2.0L 手动 两驱都市版\"\n        },\n \"series\": {\n            \"series_id\": \"\",\n            \"series_che300_id\": \"51\",\n            \"series_name\": \"本田CR-V\"\n        },\n \"brand\": {\n            \"brand_img\":\"https://7-imgpub.51huanche.com/brands/b5.jpg-normal\",\n            \"brand_id\": \"559935e940541feb2e2dea26\",\n            \"brand_che300_id\": \"5\",\n            \"brand_name\": \"本田\"\n        },\n \"vin\":{\n            \"vin\":\"LFV2A21KXE4176550\",\n            \"vin_img_key\":\"web3/87f58501e21311e78f9b7dd493a0c5b3\",\n            \"vin_img_text\":\"测试的\"\n        },\n \"mileage\": \"5\",\n \"date_reg\": \"2014-04\",\n \"color\": \"\",\n \"exterior_conditions\": \"\",\n \"interior_conditions\": \"\",\n \"engine_conditions\": \"\",\n \"transfer_times\": \"\",\n \"rescue_times\": \"\",\n \"maintenance\": \"\",\n \"description\": \"无泡水,无火烧\",\n \"imgs\": [\n {\n     \"text\": \"左前45度\",\n     \"key\": \"web3/87f58501e21311e78f9b7dd493a0c5b3\"\n }\n ]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n    \"code\": 200,\n    \"error\": false,\n    \"message\": \"操作成功\",\n    \"data\": {\n    \"brand\": {\n      \"brand_id\": \"559935e940541feb2e2dea26\",\n      \"brand_che300_id\": \"5\",\n      \"brand_name\": \"本田\"\n    },\n    \"series\": {\n      \"series_id\": \"\",\n      \"series_che300_id\": \"51\",\n      \"series_name\": \"本田CR-V\"\n    },\n    \"model\": {\n      \"model_id\": \"55993c81d843924330426973\",\n      \"model_che300_id\": \"564\",\n      \"model_name\": \"2008款 本田CR-V 两驱都市版2.0L手动档\"\n    },\n    \"city\": {\n      \"city_che300_id\": 11,\n      \"city_id\": \"5599373cdece166d2ffe7b50\",\n      \"city_name\": \"南京\"\n    },\n    \"mileage\": \"4\",\n    \"date_reg\": \"2014-04\",\n    \"color\": \"黄3\",\n    \"exterior_conditions\": \"\",\n    \"interior_conditions\": \"\",\n    \"engine_conditions\": \"\",\n    \"transfer_times\": \"\",\n    \"rescue_times\": \"\",\n    \"maintenance\": \"\",\n    \"description\": \"无泡水,无火烧\",\n    \"imgs\": [\n      {\n        \"text\": \"左前45度\",\n        \"key\": \"web3/87f58501e21311e78f9b7dd493a0c5b3\"\n      }\n    ],\n    \"_id\": \"5a41e910286ed3803d1e68d2\",\n    \"car_no\": \"6351304288966279168\",\n    \"status\": \"active\",\n    \"car_keeper_memo\": \"按时大改改\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误样例:",
          "content": "{\n     \"code\":400,\n     \"error\": true,\n     \"message\": \"参数不全\",\n     \"statusCode\": 400001\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/UsedCarRoute.js",
    "groupTitle": "used_car",
    "name": "PostApiV3OldCarId"
  },
  {
    "type": "POST",
    "url": "/api/v3/old/car/offer/comment/:offerid/plan/:planid",
    "title": "我的旧车报价发评论",
    "group": "used_car",
    "version": "0.0.1",
    "description": "<p>用于二手车项目新增 一个旧车的报价</p>",
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
            "field": "offerid",
            "description": "<p>旧车报价的id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "planid",
            "description": "<p>换车计划id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求样例：",
          "content": " {\n  \"content\": \"我的评论\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回样例:",
          "content": "{\n  \"code\": 200,\n  \"error\": false,\n  \"message\": \"操作成功\",\n  \"data\": {\n    \"_id\": \"5a62acb279b1c57133b17a3f\",\n    \"update_time\": \"2018-01-22T08:42:35.617Z\",\n    \"create_time\": \"2018-01-20T02:42:58.644Z\",\n    \"detail\": {\n      \"comments\": [],\n      \"offers\": [\n        {\n          \"appraiser\": \"5a6197483aa98a3249715bbe\",\n          \"create_time\": \"2018-01-20T02:42:58.636Z\",\n          \"expire_time\": \"2018-01-20T05:12:56.072Z\",\n          \"total_fee\": 199989,\n          \"fee\": 11,\n          \"price\": 200000\n        },\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v3_route/UsedCarRoute.js",
    "groupTitle": "used_car",
    "name": "PostApiV3OldCarOfferCommentOfferidPlanPlanid"
  }
] });
