"use strict";

const _ = require('lodash');
const DB = require('../lib/data');


module.exports = function(req, res) {
	const renderStart = Date.now();


	var nodes = DB.guilds.index.map(getNode);

	var xmlArray = getXml(nodes);

	res.type('xml');
	res.end(getXml(nodes));



	function getNode(guild) {
		return ('<url><loc>http://guilds.gw2w2w.com/guilds/' + guild.get('slug') + '</loc></url>');
	}


	function getXml(nodes) {
		return (
			'<?xml version="1.0" encoding="UTF-8"?>'
			+ '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
				+ nodes.join('\n')
			+ '</urlset>'
		);
	}


};
