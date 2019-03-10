import React from 'react';
import { Input, Button, Upload, Menu, Icon, Collapse, Dropdown } from 'antd';

import ArticleEdi from './ArticleEdi';

import './article.scss';

const tag = [
	{ type: 'java', value: 123 },
	{ type: 'C++', value: 123 },
	{ type: 'web前端', value: 123 },
	{ type: 'web后端', value: 123 },
	{ type: '大数据', value: 123 },
	{ type: '面试经验', value: 123 }
];

const Panel = Collapse.Panel;
class index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articleTittle: '',
			output: '',
			tag: []
		};
	}
	componentWillMount() {
		this.setState({ tag: tag });
	}
	// 获取标题的改变
	titleChange(e) {
		console.log(e.target.value);
		this.setState({
			articleTittle: e.target.value
		});
	}
	// 从富文本编辑器获取编辑的数据
	onSbumit = (data) => {
		if (data) {
			this.setState({ output: data });
		} else {
			console.log(new Error('没有获取到文本编辑器的输出数据'));
		}
	};

	render() {
		const panel = (
			<Menu>
				<Menu.Item>
					<Button>javascript</Button>
					<br />
					<Button>javascript</Button>
					<br />
					<br />
					{this.state.tag.map((value, key) => {
						return <Button key={key}>{value.type}</Button>;
					})}
				</Menu.Item>
			</Menu>
		);
		return (
			<div className="content">
				<div className="function-area">
					<div className="ediet-function">
						<Input placeholder="输入文章标题" size="small" onChange={this.titleChange} />
						<Button type="dashed">草稿</Button>
						<Upload>
							<Button className="no-border-btn" title="添加封面图片">
								<Icon type="picture" />
							</Button>
						</Upload>
						{/* 文章标签选择 及其发布 */}
						<Dropdown overlay={panel}>
							<a className="ant-dropdown-link" href="#">
								发布 <Icon type="down" />
							</a>
						</Dropdown>
					</div>
				</div>
				<div className="edit-area">
					<ArticleEdi onSbumit={this.onSbumit} className="ediet" />
				</div>
			</div>
		);
	}
}

export default index;
