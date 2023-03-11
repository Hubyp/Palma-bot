const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');


const data = new SlashCommandBuilder()
    .setName('shutdown')
    .setDescription('Shutdown the bot.');

module.exports.execute = async (client, interaction) => {
    if (interaction.user.id !== "948916911293497344") {
        const embed = new EmbedBuilder()
            .setColor('#ff0000')
            .setTitle('Access denied!')
            .setDescription('You do not have permission to use this command.')

        return interaction.reply({ embeds: [embed], ephemeral: true });
    } else {
        const embed = new EmbedBuilder()
            .setColor('#00ff00')
            .setTitle('The bot is shutting down....')
        await interaction.reply({ embeds: [embed], ephemeral: true });
        process.exit();
    }
};
module.exports.options = {
    ...data.toJSON()
};
module.exports.config = {
    enabled: true,
};
