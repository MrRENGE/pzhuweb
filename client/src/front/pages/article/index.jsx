import React from 'react'
import {Input, Button,Upload,Icon, Collapse } from 'antd';


import ArticleEdi from './ArticleEdi'

import './article.scss'

const Panel = Collapse.Panel;
class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            articleTittle:'',
            output:'',
         };
    }
    // 获取标题的改变
    titleChange(e){
        console.log(e.target.value)
        this.setState({
            articleTittle:e.target.value
        })
    }
    // 从富文本编辑器获取编辑的数据
    onSbumit = (data)=>{
        if(data){
            this.setState({output:data})
        }else{
            console.log(new Error('没有获取到文本编辑器的输出数据'))
        }
    }

    render() {
        return (
            <div className='content'>
                <div className='function-area'>
                    <div className="ediet-function">
                        <Input placeholder="输入文章标题" size='small' onChange={this.titleChange} /> 
                        <Button type='dashed'>草稿</Button>
                        <Upload  >
                        <Button className='no-border-btn' title='添加封面图片'>
                            <Icon type="picture" />
                        </Button>
                        </Upload>
                        <Collapse  >
                            <Panel header="发布" key="1">
                                <div>
                                    {/* 此处作为，选择，最后文章发布的类型面板 */}
                                </div>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
                {/* <div className='edit-area'>
                    
                </div> */}
                <ArticleEdi onSbumit ={this.onSbumit} className="ediet"></ArticleEdi>
            </div>
        );
    }
}

export default index;