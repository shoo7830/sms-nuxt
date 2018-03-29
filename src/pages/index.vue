<template>
	<div>
		<app-gnb />
		<div class="container">
			<app-aside />
			<div style="padding-left:250px; padding-top:50px">
			<table class="gt-table gt-table-border">
				<colgroup>
					<col width="5%"><col width="20%"><col>
				</colgroup>
				<thead>
				<tr>
					<td>num</td>
					<td>title</td>
					<td>body</td>
				</tr>
				<tr v-for="post of posts" :key="post.id">
					<td>{{post.id}}</td>
					<td>{{post.title}}</td>
					<td>{{post.body}}</td>
				</tr>
				</thead>
			</table>
			</div>
			<app-contents />
		</div>
	</div>
</template>


<script>
	import gnb from '@/components/gnb';
	import aside from '@/components/aside';
	import contents from '@/components/contents';
	import axios from 'axios';


	export default {
		components: {
			'app-gnb': gnb,
			'app-aside' : aside,
			'app-contents' : contents,
		},
		data() {
			return {
				posts: []
			}
		},
		created() {
			axios.get('http://jsonplaceholder.typicode.com/posts')
			.then(response => {
				this.posts = response.data
			})
		}
	}
</script>

<style>
.container {margin-top:60px}
.gt-table {border:1px solid #ddd; font-size:12px}
.gt-table thead tr th {padding:12px 12px; font-size:14px}
.gt-table thead tr:first-child {/* border-bottom:2px solid #ccc */}
.gt-table tr th, .gt-table tr td {padding:8px 12px; border:1px solid #ddd}
</style>