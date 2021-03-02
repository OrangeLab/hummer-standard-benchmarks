package com.test.native_app;

import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;

import androidx.appcompat.app.AppCompatActivity;

import com.test.native_app.utils.AnimUtil;
import com.test.native_app.utils.DPUtil;

public class AnimationPerformanceActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_animation_performance);

        initView();
    }

    private void initView() {
        LinearLayout layout = findViewById(R.id.scroll_layout);
        layout.setOrientation(LinearLayout.VERTICAL);

        for (int i = 0; i < 29; i++) {
            LinearLayout l = new LinearLayout(this);
            l.setOrientation(LinearLayout.HORIZONTAL);

            for (int j = 0; j < 7; j++) {
                View v = new View(this);
                v.setBackgroundResource(R.color.hm_green);
                LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(DPUtil.dp2px(this, 34), DPUtil.dp2px(this, 34));
                int margin = DPUtil.dp2px(this, 6);
                lp.setMargins(margin, margin, margin, margin);
                v.setLayoutParams(lp);
                l.addView(v);

                int index = i * 7 + j;
                AnimUtil.startAnimation(v, index);
            }

            layout.addView(l);
        }
    }

}