package com.test.native_app;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

/**
 * 可以通过以下am命令单独启动某个子页面
 * adb shell am start -n com.test.native_performance/com.test.native_app.ScrollPerformanceActivity
 */
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initView();
    }

    private void initView() {
        findViewById(R.id.btn_0).setOnClickListener(v -> {
            startActivity(new Intent(this, ScrollPerformanceActivity.class));
        });
        findViewById(R.id.btn_1).setOnClickListener(v -> {
            startActivity(new Intent(this, ListPerformanceActivity.class));
        });
        findViewById(R.id.btn_2).setOnClickListener(v -> {
            startActivity(new Intent(this, AnimationPerformanceActivity.class));
        });
        findViewById(R.id.btn_3).setOnClickListener(v -> {
            startActivity(new Intent(this, DragPerformanceActivity.class));
        });
    }
}