package com.test.hummer_app;

import com.didi.hummer.HummerActivity;

public class MainActivity extends HummerActivity {

    private String mBundleName = "home.js";

    @Override
    protected void renderHummer() {
        // 添加这个逻辑是为了测试页面启动耗时的时候，可以直接通过am命令来启动页面，通过logcat过滤Displayed来查看页面启动耗时
        // 如：adb shell am start -n com.test.hummer_performance/com.test.hummer_app.MainActivity -e BundleName scroller.js
        if (getIntent().hasExtra("BundleName")) {
            mBundleName = getIntent().getStringExtra("BundleName");
        }
        hmRender.renderWithAssets(mBundleName);
    }
}