package com.test.native_app;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

public class ListPerformanceActivity extends AppCompatActivity {

    private static final int LIST_COUNT = 1000;
    private String[] dataArray = new String[LIST_COUNT];
    private CustomAdapter mAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_list_performance);

        initData();
        initView();
    }

    private void initData() {
        for (int i = 0; i < LIST_COUNT; i++) {
            dataArray[i] = String.valueOf(i);
        }

        mAdapter = new CustomAdapter(dataArray);
    }

    private void initView() {
        LinearLayoutManager mLayoutManager = new LinearLayoutManager(this, LinearLayoutManager.VERTICAL, false);

        RecyclerView mRecyclerView = findViewById(R.id.recycler_view);
        mRecyclerView.setLayoutManager(mLayoutManager);
        mRecyclerView.setAdapter(mAdapter);
    }
}