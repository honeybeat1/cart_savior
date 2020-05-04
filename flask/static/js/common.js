// 검색 버튼 및 키워드를 클릭했을 때 로딩하는 함수.
function loading(){
	var btn_search = document.querySelectorAll(".btn_search"),
		btn_other = document.querySelectorAll(".hash_item, #btn_more, .item_price"),
		input = document.querySelectorAll(".inp_search");
	btn_search.forEach(item => {
		item.addEventListener("click", e => {
			input.forEach(item => {
				if (item.value.length != 0)
				{
					document.body.style.height = '100vh';
					document.body.style.position = 'fixed';
					document.body.style.overflow = 'hidden';
					document.getElementById("bg").style.display = "block";
					document.getElementById("loader").style.display = "block";
				}
			})
		})
	});
	btn_other.forEach(item => {
		item.addEventListener("click", e => {
			document.body.style.height = '100vh';
			document.body.style.position = 'fixed';
			document.body.style.overflow = 'hidden';
			document.getElementById("bg").style.display = "block";
			document.getElementById("loader").style.display = "block";
		})
	});
};
loading();

// 화면 사이즈를 확인하고 크기에 맞는 값을 리턴하는 함수
function change_value_by_media(pc, mobile) {
	var mql = window.matchMedia("screen and (max-width: 768px)");
	if (mql.matches) {
		return mobile;
	} else {
		return pc;
	}
	// mql.addListener(e => {
	// });
}


