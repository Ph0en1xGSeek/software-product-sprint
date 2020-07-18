package com.google.sps.data;


public class Comment {
    private String text;
    private String date;

    public Comment(String text, String date) {
        this.text = text;
        this.date = date;
    }
    
    public String getText() {
        return text;
    }

    public String geDtate() {
        return date;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setDate(String date) {
        this.date = date;
    }
}