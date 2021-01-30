package com.test.hummer_app;

import com.didi.hummer.HummerActivity;

public class MainActivity extends HummerActivity {

    @Override
    protected void renderHummer() {
        // 渲染JS页面
        hmRender.renderWithAssets("index.js");
    }
}