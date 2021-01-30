package com.test.hummer_app;

import android.app.Application;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.didi.hummer.Hummer;
import com.didi.hummer.HummerConfig;
import com.didi.hummer.adapter.navigator.NavPage;
import com.didi.hummer.adapter.navigator.impl.DefaultIntentCreator;
import com.didi.hummer.adapter.navigator.impl.DefaultNavigatorAdapter;

/**
 * Created by XiaoFeng on 2021/1/17.
 */
public class App extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        HummerConfig config = new HummerConfig.Builder()
                .setJSLogger((level, msg) -> Log.d("HummerJS", msg))
                .setExceptionCallback(e -> Log.e("HummerException", "Hummer Exception", e))
                .builder();
        Hummer.init(this, config);
    }
}
