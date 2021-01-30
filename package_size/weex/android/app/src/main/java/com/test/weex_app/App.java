package com.test.weex_app;

import android.app.Application;

import com.taobao.weex.InitConfig;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;
import com.test.weex_app.adapter.FrescoImageAdapter;
import com.test.weex_app.adapter.InterceptWXHttpAdapter;

/**
 * Created by XiaoFeng on 2021/1/17.
 */
public class App extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

//        System.loadLibrary("jsc");

//        WXEnvironment.setOpenDebugLog(true);
//        WXEnvironment.setApkDebugable(true);

        InitConfig config = new InitConfig.Builder()
                //图片库接口
                .setImgAdapter(new FrescoImageAdapter())
                //网络库接口
                .setHttpAdapter(new InterceptWXHttpAdapter())
                .build();
        WXSDKEngine.initialize(this, config);
    }
}
