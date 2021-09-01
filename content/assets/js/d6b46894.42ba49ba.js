"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[3485],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=m(r),p=n,u=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return r?a.createElement(u,o(o({ref:t},c),{},{components:r})):a.createElement(u,o({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var m=2;m<i;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2220:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return h}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],s={title:"Improving Marker Mechanism in Apache Hudi",excerpt:"We introduce a new marker mechanism leveraging the timeline server to address performance bottlenecks due to rate-limiting on cloud storage like AWS S3.",author:"yihua",category:"blog"},l=void 0,m={permalink:"/blog/2021/08/18/improving-marker-mechanism",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-18-improving-marker-mechanism.md",source:"@site/blog/2021-08-18-improving-marker-mechanism.md",title:"Improving Marker Mechanism in Apache Hudi",description:"Hudi supports fully automatic cleanup of uncommitted data on storage during its write operations. Write operations in an Apache Hudi table use markers to efficiently track the data files written to storage. In this blog, we dive into the design of the existing direct marker file mechanism and explain its performance problems on cloud storage like AWS S3 for",date:"2021-08-18T00:00:00.000Z",formattedDate:"August 18, 2021",tags:[],readingTime:7.69,truncated:!0,prevItem:{title:"Adding support for Virtual Keys in Hudi",permalink:"/blog/2021/08/18/virtual-keys"},nextItem:{title:"Schema evolution with DeltaStreamer using KafkaSource",permalink:"/blog/2021/08/16/kafka-custom-deserializer"}},c=[{value:"Need for Markers during Write Operations",id:"need-for-markers-during-write-operations",children:[]},{value:"Existing Direct Marker Mechanism and its limitations",id:"existing-direct-marker-mechanism-and-its-limitations",children:[]},{value:"Timeline-server-based marker mechanism improving write performance",id:"timeline-server-based-marker-mechanism-improving-write-performance",children:[]},{value:"Marker-related write options",id:"marker-related-write-options",children:[]},{value:"Performance",id:"performance",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],d={toc:c};function h(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hudi supports fully automatic cleanup of uncommitted data on storage during its write operations. Write operations in an Apache Hudi table use markers to efficiently track the data files written to storage. In this blog, we dive into the design of the existing direct marker file mechanism and explain its performance problems on cloud storage like AWS S3 for\nvery large writes. We demonstrate how we improve write performance with introduction of timeline-server-based markers."),(0,i.kt)("h2",{id:"need-for-markers-during-write-operations"},"Need for Markers during Write Operations"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"marker")," in Hudi, such as a marker file with a unique filename, is a label to indicate that a corresponding data file exists in storage, which then Hudi\nuses to automatically clean up uncommitted data during failure and rollback scenarios. Each marker entry is composed of three parts, the data file name,\nthe marker extension (",(0,i.kt)("inlineCode",{parentName:"p"},".marker"),"), and the I/O operation created the file (",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE")," - inserts, ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," - updates/deletes, or ",(0,i.kt)("inlineCode",{parentName:"p"},"APPEND")," - either). For example, the marker ",(0,i.kt)("inlineCode",{parentName:"p"},"91245ce3-bb82-4f9f-969e-343364159174-0_140-579-0_20210820173605.parquet.marker.CREATE")," indicates\nthat the corresponding data file is ",(0,i.kt)("inlineCode",{parentName:"p"},"91245ce3-bb82-4f9f-969e-343364159174-0_140-579-0_20210820173605.parquet")," and the I/O type is ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE"),". Before writing each data file, the Hudi write client creates a marker first in storage, which is persistent until they are explicitly deleted\nby the write client after a commit is successful."),(0,i.kt)("p",null,"The markers are useful for efficiently carrying out different operations by the write client. Two important operations use markers to find uncommitted data files of interest efficiently, instead of scanning the whole Hudi table:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Removing duplicate/partial data files"),": in Spark, the Hudi write client delegates the data file writing to multiple executors.  One executor can fail the task, leaving partial data files written, and Spark retries the task in this case until it succeeds. When speculative execution is enabled, there can also be multiple successful attempts at writing out the same data into different files, only one of which is finally handed to the Spark driver process for committing. The markers help efficiently identify the partial data files written, which contain duplicate data compared to the data files written by the successful trial later, and these duplicate data files are cleaned up before the write and commit are finalized."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rolling back failed commits"),": the write operation can fail in the middle, leaving some data files written in storage.  In this case, the marker entries stay in storage as the commit is failed.  In the next write operation, the write client first rolls back the failed commits, by identifying the data files written in these commits through the markers and deleting them.")),(0,i.kt)("p",null,"Next, we dive into the existing marker mechanism, explain its performance problem, and demonstrate the new timeline-server-based marker mechanism to address the problem."),(0,i.kt)("h2",{id:"existing-direct-marker-mechanism-and-its-limitations"},"Existing Direct Marker Mechanism and its limitations"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"existing marker mechanism")," simply creates a new marker file corresponding to each data file, with the marker filename as described above.  Each marker file is written to storage in the same directory hierarchy, i.e., commit instant and partition path, under a temporary folder ",(0,i.kt)("inlineCode",{parentName:"p"},".hoodie/.temp")," under the base path of the Hudi table.  For example, the figure below shows one example of the marker files created and the corresponding data files when writing data to the Hudi table.  When getting or deleting all the marker file paths, the mechanism first lists all the paths under the temporary folder, ",(0,i.kt)("inlineCode",{parentName:"p"},".hoodie/.temp/<commit_instant>"),", and then does the operation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"An example of marker and data files in direct marker file mechanism",src:r(2830).Z})),(0,i.kt)("p",null,"While it's much efficient over scanning the entire table for uncommitted data files, as the number of data files to write increases, so does the number of marker files to create. This can create performance bottlenecks for cloud storage such as AWS S3.  In AWS S3, each file create and delete call triggers an HTTP request and there is ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html"},"rate-limiting")," on how many requests can be processed per second per prefix in a bucket.  When the number of data files to write concurrently and the number of marker files is huge, the marker file operations can become a significant performance bottleneck for write performance. Users may barely notice this on a storage like HDFS, where the file system metadata is efficiently cached in memory."),(0,i.kt)("h2",{id:"timeline-server-based-marker-mechanism-improving-write-performance"},"Timeline-server-based marker mechanism improving write performance"),(0,i.kt)("p",null,"To address the performance bottleneck due to rate-limiting of AWS S3 explained above, we introduce a ",(0,i.kt)("strong",{parentName:"p"},"new marker mechanism leveraging the timeline server"),", which optimizes the marker-related latency for storage with non-trivial file I/O latency.  The ",(0,i.kt)("strong",{parentName:"p"},"timeline server")," in Hudi serves as a centralized place for providing the file system and timeline views. As shown below, the new timeline-server-based marker mechanism delegates the marker creation and other marker-related operations from individual executors to the timeline server for centralized processing.  The timeline server maintains the created markers in memory for corresponding marker requests.  The timeline server achieves consistency by periodically flushing the in-memory markers to a limited number of underlying files in storage.  In such a way, the number of actual file operations and latency related to markers can be significantly reduced even with a huge number of data files, thus improving the performance of the writes."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Timeline-server-based marker mechanism",src:r(9241).Z})),(0,i.kt)("p",null,"To improve the efficiency of processing marker creation requests, we design the batched handling of marker requests at the timeline server. Each marker creation request is handled asynchronously in the Javalin timeline server and queued before processing. For every batch interval, e.g., 20ms, a dispatching thread pulls the pending requests from the queue and sends them to the worker thread for processing. Each worker thread processes the marker creation requests, sets the responses, and flushes the new markers by overwriting the underlying file storing the markers in storage.  There are multiple worker threads running concurrently, given that the file overwriting takes longer than the batch interval, and each worker thread writes to an exclusive file not touched by other threads, to guarantee consistency and correctness. Both the batch interval and the number of worker threads can be configured through the write options."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Batched processing of marker creation requests",src:r(787).Z})),(0,i.kt)("p",null,"Note that the worker thread always checks whether the marker has already been created by comparing the marker name from the request with the memory copy of all markers maintained at the timeline server. The underlying files storing the markers are only read upon the first marker request (lazy loading).  The responses of requests are only sent back once the new markers are flushed to the files, so that in the case of the timeline server failure, the timeline server can recover the already created markers. These ensure consistency between storage and the in-memory copy, and improve the performance of processing marker requests."),(0,i.kt)("h2",{id:"marker-related-write-options"},"Marker-related write options"),(0,i.kt)("p",null,"We introduce the following new marker-related write options in ",(0,i.kt)("inlineCode",{parentName:"p"},"0.9.0")," release, to configure the marker mechanism."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hoodie.write.markers.type")),(0,i.kt)("td",{parentName:"tr",align:null},"direct"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Marker type to use.  Two modes are supported: (1) ",(0,i.kt)("inlineCode",{parentName:"td"},"direct"),": individual marker file corresponding to each data file is directly created by the writer; (2) ",(0,i.kt)("inlineCode",{parentName:"td"},"timeline_server_based"),": marker operations are all handled at the timeline service which serves as a proxy.  New marker entries are batch processed and stored in a limited number of underlying files for efficiency.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hoodie.markers.timeline_server_based.batch.num_threads")),(0,i.kt)("td",{parentName:"tr",align:null},"20"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Number of threads to use for batch processing marker creation requests at the timeline server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hoodie.markers.timeline_server_based.batch.interval_ms")),(0,i.kt)("td",{parentName:"tr",align:null},"50"),(0,i.kt)("td",{parentName:"tr",align:"center"},"The batch interval in milliseconds for marker creation batch processing.")))),(0,i.kt)("h2",{id:"performance"},"Performance"),(0,i.kt)("p",null,"We evaluate the write performance over both direct and timeline-server-based marker mechanisms by bulk-inserting a large dataset using Amazon EMR with Spark and S3. The input data is around 100GB.  We configure the write operation to generate a large number of data files concurrently by setting the max parquet file size to be 1MB and parallelism to be 240. As we noted before, while the latency of direct marker mechanism is acceptable for incremental writes with smaller number of data files written, it increases dramatically for large bulk inserts/writes which produce much more data files."),(0,i.kt)("p",null,"As shown below, the timeline-server-based marker mechanism generates much fewer files storing markers because of the batch processing, leading to much less time on marker-related I/O operations, thus achieving 31% lower write completion time compared to the direct marker file mechanism."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Marker Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Total Files"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Num data files written"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Files created for markers"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Marker deletion time"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Bulk Insert Time (including marker deletion)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Direct"),(0,i.kt)("td",{parentName:"tr",align:null},"165K"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1k"),(0,i.kt)("td",{parentName:"tr",align:"center"},"165k"),(0,i.kt)("td",{parentName:"tr",align:"center"},"5.4secs"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Direct"),(0,i.kt)("td",{parentName:"tr",align:null},"165K"),(0,i.kt)("td",{parentName:"tr",align:"center"},"165k"),(0,i.kt)("td",{parentName:"tr",align:"center"},"165k"),(0,i.kt)("td",{parentName:"tr",align:"center"},"15min"),(0,i.kt)("td",{parentName:"tr",align:"center"},"55min")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Timeline-server-based"),(0,i.kt)("td",{parentName:"tr",align:null},"165K"),(0,i.kt)("td",{parentName:"tr",align:"center"},"165k"),(0,i.kt)("td",{parentName:"tr",align:"center"},"20"),(0,i.kt)("td",{parentName:"tr",align:"center"},"~3s"),(0,i.kt)("td",{parentName:"tr",align:"center"},"38min")))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"We identify that the existing direct marker file mechanism incurs performance bottlenecks due to the rate-limiting of file create and delete calls on cloud storage like AWS S3.  To address this issue, we introduce a new marker mechanism leveraging the timeline server, which delegates the marker creation and other marker-related operations from individual executors to the timeline server and uses batch processing to improve performance.  Performance evaluations on Amazon EMR with Spark and S3 show that the marker-related I/O latency and overall write time are reduced."))}h.isMDXComponent=!0},787:function(e,t,r){t.Z=r.p+"assets/images/batched-marker-creation-e8455c544f3b11ceed810b663df59f7f.png"},2830:function(e,t,r){t.Z=r.p+"assets/images/direct-marker-file-mechanism-b97b82f80430598f1d6a9b96521bb1a0.png"},9241:function(e,t,r){t.Z=r.p+"assets/images/timeline-server-based-marker-mechanism-fd71c7ce7f08827069ef9973900f8757.png"}}]);