package com.test.native_app;

import android.os.Bundle;
import android.widget.LinearLayout;

import androidx.appcompat.app.AppCompatActivity;

public class ScrollPerformanceActivity extends AppCompatActivity {

    private static final int ITEM_COUNT = 500;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_scroll_performance);

        initView();
    }

    private void initView() {
        LinearLayout scrollLayout = findViewById(R.id.scroll_layout);
        for (int i = 0; i < ITEM_COUNT; i++) {
            RowItemView itemView = new RowItemView(this);
            itemView.setText(String.valueOf(i));
            scrollLayout.addView(itemView);
        }
    }
}