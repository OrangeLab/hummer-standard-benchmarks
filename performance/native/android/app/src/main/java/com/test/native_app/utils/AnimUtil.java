package com.test.native_app.utils;

import android.animation.ArgbEvaluator;
import android.animation.ObjectAnimator;
import android.animation.PropertyValuesHolder;
import android.animation.ValueAnimator;
import android.content.Context;
import android.view.View;
import android.view.animation.LinearInterpolator;

import com.test.native_app.R;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by XiaoFeng on 2021/3/2.
 */
public class AnimUtil {

    public static PropertyValuesHolder[] makeAnimations(Context context, int index) {
        PropertyValuesHolder translationX = PropertyValuesHolder.ofFloat("translationX", DPUtil.dp2px(context, 0), DPUtil.dp2px(context, 20));
        PropertyValuesHolder rotation = PropertyValuesHolder.ofFloat("rotation", 0f, 360f);
        PropertyValuesHolder scaleX = PropertyValuesHolder.ofFloat("scaleX", 1.4f, 0.6f);
        PropertyValuesHolder scaleY = PropertyValuesHolder.ofFloat("scaleY", 1.4f, 0.6f);
        PropertyValuesHolder alpha = PropertyValuesHolder.ofFloat("alpha", 1f, 0.2f);
        PropertyValuesHolder backgroundColor = PropertyValuesHolder.ofObject("backgroundColor", new ArgbEvaluator(), context.getColor(R.color.hm_blue), context.getColor(R.color.hm_purple), context.getColor(R.color.hm_orange));

        index = index % 5;
        List<PropertyValuesHolder> list = new ArrayList<>();
        if (index == 0) {
            list.add(translationX);
        } else if (index == 1) {
            list.add(rotation);
        } else if (index == 2) {
            list.add(scaleX);
            list.add(scaleY);
        } else if (index == 3) {
            list.add(alpha);
        } else if (index == 4) {
            list.add(backgroundColor);
        }
        return list.toArray(new PropertyValuesHolder[0]);
    }

    public static void startAnimation(View view, int index) {
        ObjectAnimator animator = ObjectAnimator.ofPropertyValuesHolder(view, AnimUtil.makeAnimations(view.getContext(), index));
        animator.setDuration(1000);
        animator.setRepeatCount(ValueAnimator.INFINITE);
        animator.setRepeatMode(ValueAnimator.REVERSE);
        animator.setInterpolator(new LinearInterpolator());
        animator.start();
    }
}
