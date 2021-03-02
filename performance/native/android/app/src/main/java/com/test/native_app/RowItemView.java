package com.test.native_app;

import android.content.Context;
import android.util.AttributeSet;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.Nullable;

import com.test.native_app.utils.AnimUtil;
import com.test.native_app.utils.DPUtil;

/**
 * Created by XiaoFeng on 2021/3/2.
 */
public class RowItemView extends LinearLayout {

    public RowItemView(Context context) {
        super(context);
        init(context);
    }

    public RowItemView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        init(context);
    }

    public RowItemView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init(context);
    }

    private void init(Context context) {
        setBackgroundColor(0x2215D0B4);
        setOrientation(LinearLayout.HORIZONTAL);
        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, DPUtil.dp2px(context, 48));
        int margin = DPUtil.dp2px(context, 4);
        lp.setMargins(margin, margin, margin, margin);
        setLayoutParams(lp);

        for (int i = 0; i < 5; i++) {
            TextView tv = new TextView(context);
            tv.setBackgroundColor(context.getColor(R.color.hm_green));
            tv.setGravity(Gravity.CENTER);
            LinearLayout.LayoutParams lp2 = new LinearLayout.LayoutParams(DPUtil.dp2px(context, 30), DPUtil.dp2px(context, 30));
            int itemMargin = DPUtil.dp2px(context, 16);
            lp2.setMargins(itemMargin, 0, itemMargin, 0);
            lp2.gravity = Gravity.CENTER_VERTICAL;
            tv.setLayoutParams(lp2);

            addView(tv);

            AnimUtil.startAnimation(tv, i);
        }
    }

    public void setText(String text) {
        for (int i = 0; i < getChildCount(); i++) {
            View item = getChildAt(i);
            if (item instanceof TextView) {
                ((TextView) item).setText(text);
            }
        }
    }
}
