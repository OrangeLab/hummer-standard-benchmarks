package com.test.weex_app;

import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXFileUtils;

import org.json.JSONObject;

public class MainActivity extends AppCompatActivity implements IWXRenderListener {

    private WXSDKInstance mWXSDKInstance;
    private Handler mHandler = new Handler();

    private String mBundleAssetsName = "index.js";
//    private String mBundleAssetsName = "components/scroller.js";
//    private String mBundleAssetsName = "components/list.js";
//    private String mBundleAssetsName = "components/animation.js";
//    private String mBundleAssetsName = "components/drag.js";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_main);

        initData();

        createInstance();
        asyncRenderPage();
    }

    private void initData() {
        if (getIntent() != null) {
            Uri uri = getIntent().getData();
            if (uri != null) {
                String path = uri.getPath();
                if (!TextUtils.isEmpty(path)) {
                    if (path.startsWith("/")) {
                        path = path.substring(1);
                    }
                    mBundleAssetsName = path;
                }
            } else {
                if (getIntent().hasExtra("BundleName")) {
                    mBundleAssetsName = getIntent().getStringExtra("BundleName");
                }
            }
        }
    }

    private void asyncRenderPage() {
        /**
         * 此处一定要判断WXSDKEngine是否已经成功初始化了，由于WXSDKEngine底层初始化的库非常多
         * 导致整个的初始化非常的耗时，并且这个初始化是异步执行的，尤其是初始化JS引擎部分的代码（WXBridgeManager）。
         * 因此有非常大的概率导致当第一次使用Weex的API的时候，底层还没有完成初始化
         * 导致出现错信息 "degradeToH5|createInstance fail|wx_create_instance_error isJSFrameworkInit==false reInitCount == 1"
         * 这段耗时可以通过在程序启动的时候增加启动等待页面来人性化的忽略这部分耗时。
         */
        if (!WXSDKEngine.isInitialized()) {
            mHandler.postDelayed(this::asyncRenderPage, 100);
        } else {
            renderPage();
        }
    }

    private void createInstance() {
        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(this);
    }

    private void renderPage() {
        /**
         * bundleUrl source http://dotwe.org/vue/38e202c16bdfefbdb88a8754f975454c
         */
        String pageName = "WXSample";

        // 远程加载
//        String bundleUrl = "http://dotwe.org/raw/dist/38e202c16bdfefbdb88a8754f975454c.bundle.wx";
//        mWXSDKInstance.renderByUrl(pageName, bundleUrl, null, null, WXRenderStrategy.APPEND_ASYNC);

        // 本地加载
        String bundleContent = WXFileUtils.loadAsset(mBundleAssetsName, this);
        mWXSDKInstance.render(pageName, bundleContent, null, null, WXRenderStrategy.APPEND_ASYNC);
    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        setContentView(view);
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
        Log.v("zdf", "onRenderSuccess");
    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {
        Log.v("zdf", "onRefreshSuccess");
    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {
        Log.e("zdf", "onException: " + errCode + ", " + msg);
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityResume();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityPause();
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityStop();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityDestroy();
        }
        mHandler.removeCallbacksAndMessages(null);
    }
}