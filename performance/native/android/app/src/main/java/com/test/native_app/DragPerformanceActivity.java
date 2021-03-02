package com.test.native_app;

import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

public class DragPerformanceActivity extends AppCompatActivity {

    private float downx = -1;
    private float downy = -1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_drag_performance);

        initView();
    }

    private void initView() {
        View drawView = findViewById(R.id.drag_view);
        drawView.setOnTouchListener((view, event) -> {
            switch (event.getAction()) {
                case MotionEvent.ACTION_DOWN:
                    if (downx < 0) {
                        downx = event.getRawX();
                    }
                    if (downy < 0) {
                        downy = event.getRawY();
                    }
                    break;
                case MotionEvent.ACTION_MOVE:
                    float moveX = event.getRawX() - downx;
                    float moveY = event.getRawY() - downy;
                    drawView.setTranslationX(moveX);
                    drawView.setTranslationY(moveY);
                    break;
                case MotionEvent.ACTION_UP:
                case MotionEvent.ACTION_CANCEL:
                    break;
            }
            return true;
        });
    }
}