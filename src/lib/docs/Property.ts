'use strict';
import Constants from '../util/Constants';
import { RichEmbed } from 'discord.js';

/**
 * Represents a documented property of a parent class
 */
export default class Property
{
	public name: string;
	public lower: string;
	public description: string;
	public memberOf: string;
	public access?: string;
	public virtual?: boolean;
	public type: string;
	public url: string;
	public string: string;

	public constructor (name: string,
						description: string,
						memberOf: string,
						type: string,
						access?: string,
						virtual?: boolean)
	{
		this.name = name || '';
		this.lower = name.toLowerCase();
		this.memberOf = memberOf;
		this.description = description || '';
		this.type = type || '';
		this.access = access || '';
		this.virtual = virtual || false;
		this.url = this.url = `${Constants.endpoints.yamdbf}/${memberOf}.html#${name}`;
		this.string = `\`${memberOf}.${name}\`\n\n${description}\n\n`
			+ `**type:** \`${type}\`\n\n**Docs:** ${this.url}`;

		this.embed = new RichEmbed()
			.setColor(11854048)
			.setDescription(`**${memberOf}.${name}**`)
			.addField('Description', description)
			.addField('Type', `\`${type}\``)
			.addField('Docs link', this.url);
	}

	public toString(): string
	{
		return this.string;
	}
}
