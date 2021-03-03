package com.test.hummer_app;

import android.text.TextUtils;

import com.didi.hummer.HummerActivity;
import com.didi.hummer.adapter.navigator.NavPage;

public class MainActivity extends HummerActivity {

    @Override
    protected NavPage getPageInfo() {
        // 添加这个逻辑是为了测试页面启动性能的时候，可以直接通过am命令来启动页面，通过logcat过滤Displayed来查看时间
        // 如：adb shell am start -n com.test.hummer_app/.MainActivity -e BundleName list.js
        String url = getIntent().getStringExtra("BundleName");
        if (!TextUtils.isEmpty(url)) {
            return new NavPage(url);
        }
        return super.getPageInfo();
    }

    @Override
    protected void renderHummer() {
        // 添加这个逻辑是为了测试页面启动性能的时候，可以直接通过am命令来启动页面，通过logcat过滤Displayed来查看时间
        // 如：adb shell am start -n com.test.hummer_app/.MainActivity -e BundleName list.js
        if (getIntent() != null && getIntent().hasExtra("BundleName")) {
            super.renderHummer();
            return;
        }

        // 渲染JS页面
        hmRender.renderWithAssets("home.js");
//        hmRender.renderWithUrl("http://172.23.160.223:8001/home.js");
    }
}