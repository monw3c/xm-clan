# step
步骤条 结合steps使用

## 组件结构
``` html
<view class="g-class g-step-item {{parse.getClass(status,current,index)}} {{ direction === 'vertical' ? 'g-step-vertical' : 'g-step-horizontal' }}" style="{{parse.getItemStyle(len,direction)}}">
    <view class="g-step-item-ico">
        <view class="g-step-ico" wx:if="{{parse.noIco(status,current,index,icon)  }}">{{ index+1 }}</view>
        <view class="g-step-ico" wx:else>
            <g-icon g-icon-class="g-step-ico-in" size="20" color="#fff" name="{{parse.getIcoClass(status,icon)}}"></g-icon>
        </view>
        <view class="g-step-line" wx:if="{{ index !== len - 1 }}"></view>
    </view>
    <view class="g-step-item-main">
        <view class="g-step-item-title" wx:if="{{title !== ''}}">
            {{title}}
        </view>
        <view class="g-step-item-title" wx:else>
            <slot name="title"></slot>
        </view>
        <view class="g-step-item-content" wx:if="{{content !== ''}}">
            {{content}}
        </view>
        <view class="g-step-item-content" wx:else>
            <slot name="content"></slot>
        </view>
    </view>
</view>
<wxs module="parse"> 
var allStatus = ['wait','process','finish','error'];
module.exports = {
    noIco : function( status,current,index,icon ){
        var aindex = allStatus.indexOf(status);
        var noIcon = true;
        if( index < current || icon !== '' ){
            noIcon = false;
        }
        return noIcon;
    },
    getIcoClass : function( status,ico ){
        var class = '';
        /*if( status === 'error' ){
            class = 'cancel';
        }else{
            class = 'right';
        } */
        if( ico !== '' ){
            class = ico;
        }
        return class;
    },
    getItemStyle : function(len,direction){
        if( direction === 'horizontal' ){
            return 'width :'+100/len + '%';
        }else{
            return 'width : 100%;';
        }
    },
    getClass : function( status,current,index ) {
        //wait、process、finish、error
        var startClass = 'g-step-'
        var classes = '';
        var cindex = allStatus.indexOf( status );
        if( cindex !== -1 ){
            classes = startClass + allStatus[cindex];
        }
        if( index < current ){
            classes = startClass + 'finish';
        }else if( index === current ){
            classes = startClass + 'process';
        }
        return classes;
    }
}
</wxs>
``` 

## 组件脚本
``` js
<script>
Component({
    externalClasses: ['g-steps-class'],
    properties: {
        status: {
            type: String,
            //wait、process、finish、error
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        content: {
            type: String,
            value: ''
        },
        icon: {
            type: String,
            value: ''
        }
    },
    options: {
        // 在组件定义时的选项中启用多slot支持
        multipleSlots: true
    },
    relations: {
        '../steps/steps': {
            type: 'parent'
        }
    },
    data: {
        //step length
        len: 1,
        //current in step index
        index: 0,
        //parent component select current index
        current: 0,
        //css direction
        direction: 'horizontal'
    },
    methods: {
        updateDataChange(options) {
            this.setData({
                len: options.len,
                index: options.index,
                current: options.current,
                direction: options.direction
            })
        }
    }
})
</script>
``` 

## 脚本说明

``` js

```

## 示例

``` js
<g-steps current="{{currentStep}}" g-steps-class="g-steps-class">
      <g-step status="finish" icon="done">
          <view slot="title">
                审核完成
          </view>
          <view slot="content">
              2019.07.13 17:04:32
          </view>
      </g-step>
      <g-step status="process" icon="wait">
          <view slot="title">
              提交申请
          </view>
          <view slot="content" >
              2019.07.13 17:04:32
          </view>
      </g-step>
      <g-step status="process" icon="wait">
          <view slot="title">
              审核中
          </view>
          <view slot="content" >
              2019.07.13 17:04:32
          </view>
      </g-step>
      <g-step status="error" icon="del">
          <view slot="title">
              提交失败
          </view>
          <view slot="content">
              2019.07.13 17:04:32
          </view>
      </g-step>
  </g-steps>
``` 