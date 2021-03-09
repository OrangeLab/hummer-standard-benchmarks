package com.test.native_app;

import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;

import androidx.appcompat.app.AppCompatActivity;

import com.test.native_app.utils.AnimUtil;
import com.test.native_app.utils.DPUtil;

public class AnimationPerformanceActivity extends AppCompatActivity {

    private static final int ITEM_COUNT = 500;
    private static final int COLUMN_COUNT = 7;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_animation_performance);

        initView();
    }

    private void initView() {
        LinearLayout layout = findViewById(R.id.scroll_layout);
        layout.setOrientation(LinearLayout.VERTICAL);

        int rowCount = ITEM_COUNT / COLUMN_COUNT + 1;
        for (int i = 0; i < rowCount; i++) {
            LinearLayout l = new LinearLayout(this);
            l.setOrientation(LinearLayout.HORIZONTAL);

            for (int j = 0; j < COLUMN_COUNT; j++) {
                View v = new View(this);
                v.setBackgroundColor(getColor(R.color.hm_green));
                LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(DPUtil.dp2px(this, 34), DPUtil.dp2px(this, 34));
                int margin = DPUtil.dp2px(this, 6);
                lp.setMargins(margin, margin, margin, margin);
                v.setLayoutParams(lp);
                l.addView(v);

                int index = i * COLUMN_COUNT + j;
                AnimUtil.startAnimation(v, index);
            }

            layout.addView(l);
        }
    }

}