// links pages
$("body").append(
  '<div id="pages-nav" style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #ccc; border-bottom: none; border-right: none; width: 260px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 14px" onclick="$(this).parent().hide()">Закрыть X</a> \
	<style> \
		#pages-nav { opacity: .4; transition: opacity .3s linear;} \
		#pages-nav:hover {opacity: 1; } \
		#pages { padding: 30px 20px 10px 40px; font-size: 14px; } \
		#pages a { text-decoration: none; color:#000; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages" style="margin:0;"> \
		<li><a href="index.html">Главная</a></li> \
		<li><a href="production.html">Продукция</a></li> \
		<li><a href="equipment.html">Оборудование </a></li> \
		<li><a href="categories.html">Категории </a></li> \
		<li><a href="product-card-v1.html">Карта продукта</a></li> \
		<li><a href="product-card-v2.html">Карта оборудования</a></li> \
		<li><a href="basket-v1.html">Корзина</a></li> \
		<li><a href="blog.html">Блог</a></li> \
		<li><a href="article-inner.html">Статья</a></li> \
		<li>----</li> \
		<li><a href="about-us.html">О нас</a></li> \
		<li><a href="contacts.html">Контакты</a></li> \
		<li><a href="order.html">Заказ</a></li> \
		<li><a href="delivery-and-payment.html">Доставка и оплата</a></li> \
		<li><a href="faq.html">FAQ</a></li> \
		<li><a href="profile.html">Профиль</a></li> \
		<li><a href="settings.html">Настройки</a></li> \
		<li><a href="change-password.html">Изменение пароля</a></li> \
		<li><a href="popups.html">Всплывающие окна</a></li> \
		<li><a href="404.html">404</a></li> \
		<li><a href="ui-kit.html">UI Kit</a></li> \
	</ol> \
</div>'
);
