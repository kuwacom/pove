import { logger, config, client } from "../bot";
import * as Types from "../modules/types";
import Discord from "discord.js";

// interaction
export const interaction = {
    // エラー
    ERROR: {
        embeds: [
            new Discord.EmbedBuilder()
            .setColor(Types.embedCollar.error)
            .setTitle(config.emoji.error+"エラー")
            .setDescription("エラーが発生しました！")
            .setFooter({ text: config.embed.footerText })
        ],
        ephemeral: true
    } as Discord.InteractionReplyOptions,

    NotfoundPoll: {
        embeds: [
            new Discord.EmbedBuilder()
            .setColor(Types.embedCollar.error)
            .setTitle(config.emoji.error+"ポールが存在しません！")
            .setDescription("すでにそのポールは終了しているか削除されています")
            .setFooter({ text: config.embed.footerText })
        ],
        ephemeral: true
    } as Discord.InteractionReplyOptions,

    Created: {
        embeds: [
            new Discord.EmbedBuilder()
            .setColor(Types.embedCollar.error)
            .setTitle(config.emoji.error+"ポールはすでに作成されています")
            .setDescription("すでにそのポールは作成されています")
            .setFooter({ text: config.embed.footerText })
        ],
        ephemeral: true
    } as Discord.InteractionReplyOptions,

    // template二個目のエラー
    TemplateError2: (text: string): Discord.InteractionReplyOptions => {
        return {
            embeds: [
                new Discord.EmbedBuilder()
                .setColor(Types.embedCollar.error)
                .setTitle(config.emoji.error+"エラー")
                .setDescription(text)
                .setFooter({ text: config.embed.footerText })
            ],
            ephemeral: true
        };
    }
}

// message
export const message = {
    // textCommandに対応してないとき
    NotSupportTextCommand: {
        embeds: [
            new Discord.EmbedBuilder()
            .setColor(Types.embedCollar.error)
            .setTitle(config.emoji.error+"エラー")
            .setDescription(
                "このコマンドはテキストコマンドに対応していません！"
            )
            .setFooter({ text: config.embed.footerText })
        ],
        allowedMentions: {
            repliedUser: true
        }
    } as Discord.MessageReplyOptions,
    
    // 引数ないとき
    NoArg: {
        embeds: [
            new Discord.EmbedBuilder()
            .setColor(Types.embedCollar.warning)
            .setTitle(config.emoji.error+"エラー")
            .setDescription("**引数を入力してください**")
            .setFooter({ text: config.embed.footerText })
        ],
        allowedMentions: {
            repliedUser: true
        }
    } as Discord.MessageReplyOptions,

    // コマンドがないとき
    NotfoundCommand: {
        embeds: [
            new Discord.EmbedBuilder()
            .setColor(Types.embedCollar.error)
            .setTitle(config.emoji.error+"エラー")
            .setDescription(
                "**コマンドが見つかりません**"
                )
            .setFooter({ text: config.embed.footerText })
        ],
        allowedMentions: {
            repliedUser: true
        }
    } as Discord.MessageReplyOptions,
}