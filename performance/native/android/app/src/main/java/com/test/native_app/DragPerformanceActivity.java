package com.test.native_app;

import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

import java.util.HashMap;

public class DragPerformanceActivity extends AppCompatActivity {

    private float downX = -1;
    private float downY = -1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_drag_performance);

        initView();
    }

    private void initView() {
        View itemView = findViewById(R.id.drag_view);
        itemView.setOnTouchListener((view, event) -> {
            switch (event.getAction()) {
                case MotionEvent.ACTION_DOWN:
                    if (downX < 0) {
                        downX = event.getRawX();
                    }
                    if (downY < 0) {
                        downY = event.getRawY();
                    }
                    break;
                case MotionEvent.ACTION_MOVE:
                    float moveX = event.getRawX() - downX;
                    float moveY = event.getRawY() - downY;
                    itemView.setTranslationX(moveX);
                    itemView.setTranslationY(moveY);
                    break;
                case MotionEvent.ACTION_UP:
                case MotionEvent.ACTION_CANCEL:
                    break;
            }
            return true;
        });
    }
}