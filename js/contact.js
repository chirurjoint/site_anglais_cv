/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Google Map


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var menu = $('.menu');
	var burger = $('.hamburger');
	var menuActive = false;
	var map;

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		if(window.innerWidth > 1280)
		{
			if(menuActive)
			{
				closeMenu();
			}
		}
		setTimeout(function()
		{
			jQuery(".main_content_scroll").mCustomScrollbar("update");
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initGoogleMap();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.hamburger').length && $('.menu').length)
		{
			var hamb = $('.hamburger');

			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	4. Init Google Map

	*/

	function initGoogleMap()
	{
		var macarte = L.map('map').setView([48.68439, 6.18496],13) ;
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                // Il est toujours bien de laisser le lien vers la source des données
                attribution: 'données © OpenStreetMap/ODbL - rendu OSM France',
                minZoom: 1,
                maxZoom: 20
            }).addTo(macarte);

		let marker = L.marker([48.68439, 6.18496]).addTo(macarte); /* set your location's GPS Coordinates : [LAT,LON] */
	}
});